// We will define user roles for authorizing different resources in our server.
// The roles will be in the pair of key and value.
// Key -> User Role name
// Value -> User Role code

const ROLES_LIST = {
	Admin: 5150,
	Editor: 1984,
	User: 2001,
};

module.exports = { ROLES_LIST };
