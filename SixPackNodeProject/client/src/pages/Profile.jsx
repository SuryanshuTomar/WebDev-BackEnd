import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";

const Profile = () => {
	const { isAuthenticated, loading, user } = useContext(AuthContext);

	if (!isAuthenticated) return <Navigate to={"/login"} />;

	return loading ? (
		<Loader />
	) : (
		<div>
			<h1>User Details : </h1> <br />
			<h4>Name: {user?.name}</h4>
			<h4>Email : {user?.email}</h4>
		</div>
	);
};
export default Profile;
