const getAllTasks = (req, res) => {
	res.send("Get All Items");
};

const createTask = (req, res) => {
	res.send("Create Task");
};

const getTask = (req, res) => {
	res.send("Get Item");
};

const updateTask = (req, res) => {
	res.send("Update task");
};

const deleteTask = (req, res) => {
	res.send("Delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
