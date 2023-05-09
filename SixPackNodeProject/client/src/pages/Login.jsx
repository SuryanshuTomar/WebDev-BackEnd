import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="login">
			<section>
				<form>
					<input type="email" placeholder="Email" required />
					<input type="password" required placeholder="Password" />
					<button type="submit">Login</button>
					<h4>{"Don't"} have an account? </h4>
					<Link to="/register">Register Here</Link>
				</form>
			</section>
		</div>
	);
};
export default Login;
