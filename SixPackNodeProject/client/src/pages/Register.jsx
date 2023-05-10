import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import fetchUser from "../axios/userInstance";
import Toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
	const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
		useContext(AuthContext);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const formHandler = (event) => {
		setFormData((prevForm) => ({
			...prevForm,
			[event.target.name]: event.target.value,
		}));
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		setLoading(true);
		try {
			const { data } = await fetchUser.post("/new", formData, {
				withCredentials: true,
			});

			console.log(data);
			Toast.success(data.message);
			setIsAuthenticated(true);
			setLoading(false);
		} catch (error) {
			console.log(error);
			Toast.error(error.response.data.message);
			setIsAuthenticated(false);
			setLoading(false);
		}
	};

	if (isAuthenticated) {
		return <Navigate to={"/"} />;
	}

	return (
		<div className="login">
			<section>
				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Name"
						name="name"
						required
						value={formData.name}
						onChange={formHandler}
					/>
					<input
						type="email"
						placeholder="Email"
						name="email"
						required
						value={formData.email}
						onChange={formHandler}
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						required
						value={formData.password}
						onChange={formHandler}
					/>
					<button disabled={loading} type="submit">
						Register
					</button>
					<h4>Already have an account?</h4>
					<Link to="/login">Sign In here</Link>
				</form>
			</section>
		</div>
	);
};
export default Register;
