import axios from "axios";

const fetchTask = axios.create({
	baseURL: "http://localhost:8000/api/v1/tasks",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

export default fetchTask;
