import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import fetchUser from "../axios/userInstance";
import { toast } from "react-hot-toast";

const Login = () => {
	const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
		useContext(AuthContext);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

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
			const { data } = await fetchUser.post("/login", formData);

			console.log(data);
			toast.success(data.message);
			setIsAuthenticated(true);
			setLoading(false);
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
			setIsAuthenticated(false);
			setLoading(false);
		}
	};

	if (isAuthenticated) return <Navigate to={"/"} />;

	return (
		<div className="login">
			<section>
				<form onSubmit={submitHandler}>
					<input
						type="email"
						placeholder="Email"
						required
						name="email"
						value={formData.email}
						onChange={formHandler}
					/>
					<input
						type="password"
						required
						placeholder="Password"
						name="password"
						value={formData.password}
						onChange={formHandler}
					/>
					<button disabled={loading} type="submit">
						Login
					</button>
					<h4>{"Don't"} have an account? </h4>
					<Link to="/register">Register Here</Link>
				</form>
			</section>
		</div>
	);
};
export default Login;
