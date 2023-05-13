import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import fetchUser from "../axios/userInstance";
import { toast } from "react-hot-toast";

const Header = () => {
	const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
		useContext(AuthContext);

	const logoutHandler = async () => {
		setLoading(true);
		try {
			const { data } = await fetchUser.get("/logout");
			// console.log(data);
			toast.success("Logged Out!");
			setIsAuthenticated(false);
			setLoading(false);
		} catch (error) {
			console.log(error);
			toast.success("Something Went Wrong!");
			setIsAuthenticated(true);
			setLoading(false);
		}
	};

	if (!isAuthenticated)
		return (
			<>
				<nav className="header">
					<div>
						<h2>Todo App</h2>
					</div>
					<article>
						<Link to={"/login"}>Login</Link>
						<Link to={"/register"}>Register</Link>
					</article>
				</nav>
			</>
		);

	return (
		<nav className="header">
			<div>
				<h2>Todo App</h2>
			</div>
			<article>
				<Link to={"/"}>Home</Link>
				<Link to={"/profile"}>Profile</Link>
				{isAuthenticated ? (
					<button
						disabled={loading}
						className="btn"
						onClick={logoutHandler}
					>
						Logout
					</button>
				) : (
					<Link to={"/login"}>Login</Link>
				)}
			</article>
		</nav>
	);
};
export default Header;
