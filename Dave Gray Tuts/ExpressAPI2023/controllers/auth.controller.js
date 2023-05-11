// setting users from users.json local db
const usersDB = {
	users: require("../data/users.json"),
	setUsers: function (data) {
		this.users = data;
	},
};

const bcrypt = require("bcrypt");

