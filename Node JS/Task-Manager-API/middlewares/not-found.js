const notFound = (req, res) => {
	res.status(404).send("<h2>Route Does not Exist !</h2>");
};

module.exports = notFound;
