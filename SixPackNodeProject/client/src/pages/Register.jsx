import { useState } from "react";
import { Link } from "react-router-dom";
import fetchUser from "../axios/userInstance";
import Toast from "react-hot-toast";

const Register = () => {
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

		const { data } = await fetchUser.post("/new", formData, {
			withCredentials: true,
		});

		console.log(data);
		Toast.success("User Registeration Complete!");
	};

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
					<button type="submit">Register</button>
					<h4>Already have an account?</h4>
					<Link to="/login">Sign In here</Link>
				</form>
			</section>
		</div>
	);
};
export default Register;
