import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import fetchUser from "./axios/userInstance";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

function App() {
	const { setUser, setIsAuthenticated, setLoading } = useContext(AuthContext);

	useEffect(() => {
		setLoading(true);
		fetchUser
			.get("/me", {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res);
				setUser(res.data.user);
				setIsAuthenticated(true);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setUser({});
				setIsAuthenticated(false);
				setLoading(false);
			});
	}, [setUser, setIsAuthenticated, setLoading]);

	return (
		<>
			<RouterProvider router={router} />
			<Toaster position="bottom-center" reverseOrder={false} />
		</>
	);
}
export default App;
