// setting users from users.json local db
const usersDB = {
	users: require("../data/users.json"),
	setUsers: function (data) {
		this.users = data;
	},
};

// imports
const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const createNewUser = async (req, res, next) => {
	const { user, pass } = req.body;

	try {
		// check if both fields are present
		// status code 400 -> bad request
		if (!user || !pass) {
			return res.status(400).json({
				success: false,
				message: "Username and password are required!",
			});
		}

		// check if the user is already present in the db or not
		const userDuplicate = usersDB.users.find((usr) => usr.username === user);

		// if user is already present in the DB then no need to create the user with the same username
		// status code 409 -> conflict
		if (userDuplicate)
			return res.status(409).json({
				success: false,
				message: `User ${user} already exist!`,
			});

		// encrypt the password
		const hashedPass = await bcrypt.hash(pass, 10);

		// create and store the new user
		const newUser = { username: user, password: hashedPass };
		usersDB.setUsers([...usersDB.users, newUser]);

		// write to localDB users.json file
		await fsPromises.writeFile(
			path.join(__dirname, "..", "data", "users.json"),
			JSON.stringify(usersDB.users)
		);

		// send response
		res.status(201).json({
			success: true,
			data: newUser,
		});
		//
	} catch (error) {
		console.log(error.mesage);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

module.exports = { createNewUser };
