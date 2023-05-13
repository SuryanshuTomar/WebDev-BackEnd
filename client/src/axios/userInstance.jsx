import axios from "axios";

const fetchUser = axios.create({
	baseURL: "http://localhost:8000/api/v1/users",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

export default fetchUser;
