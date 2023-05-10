import { useCallback, useContext, useEffect, useState } from "react";
import fetchTask from "../axios/taskInstance";
import { toast } from "react-hot-toast";
import TodoItem from "../components/TodoItem";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
	const { isAuthenticated } = useContext(AuthContext);

	const [formData, setFormData] = useState({
		title: "",
		description: "",
	});
	const [loading, setLoading] = useState(false);
	const [tasks, setTasks] = useState([]);

	const formHandler = (event) => {
		setFormData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value,
		}));
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		setLoading(true);
		try {
			const { data } = await fetchTask.post("/new", formData);
			console.log(data);

			let updatedTasks;
			if (!tasks.length) {
				updatedTasks = [data.task];
			} else {
				updatedTasks = [...tasks, data.task];
			}
			setTasks(updatedTasks);

			toast.success(`Added: ${data.task.title}`);
			setLoading(false);
			setFormData({ title: "", description: "" });
		} catch (error) {
			console.log(error);
			toast.success(error.response.data.message);
			setLoading(false);
		}
	};

	const fetchAllTasks = useCallback(async () => {
		try {
			const { data } = await fetchTask.get("/all");
			// console.log(data.tasks);
			setTasks(data.tasks);
		} catch (error) {
			// console.log(error);
			toast.error(error.response.data.message);
		}
	}, []);

	useEffect(() => {
		fetchAllTasks();
	}, [fetchAllTasks]);

	const updateHandler = async (id) => {
		try {
			const { data } = await fetchTask.put(`/${id}`);
			console.log(data);

			const filteredTask = tasks.filter(
				(task) => task._id !== data.task._id
			);
			const updatedTask = [data.task, ...filteredTask];
			const sortedTask = updatedTask.sort(
				(a, b) =>
					new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
			);
			setTasks(sortedTask);
			toast.success(`Updated: ${data.task.title}`);
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
		}
	};

	const deleteHandler = async (id) => {
		try {
			const { data } = await fetchTask.delete(`/${id}`);
			const filteredTask = tasks.filter(
				(task) => task._id !== data.task._id
			);
			setTasks(filteredTask);
			toast.success(`Deleted: ${data.task.title}`);
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
		}
	};

	if (!isAuthenticated) return <Navigate to={"/login"} />;

	return (
		<div className="container">
			<div className="login">
				<section className="login">
					<form onSubmit={submitHandler}>
						<input
							type="text"
							placeholder="Title"
							required
							name="title"
							value={formData.title}
							onChange={formHandler}
						/>
						<input
							type="text"
							required
							placeholder="Description"
							name="description"
							value={formData.description}
							onChange={formHandler}
						/>
						<button disabled={loading} type="submit">
							Add Task
						</button>
					</form>
				</section>
			</div>

			<div className="todosContainer">
				{tasks.map((task) => (
					<TodoItem
						key={task._id}
						task={task}
						updateHandler={updateHandler}
						deleteHandler={deleteHandler}
					/>
				))}
			</div>
		</div>
	);
};
export default Home;
