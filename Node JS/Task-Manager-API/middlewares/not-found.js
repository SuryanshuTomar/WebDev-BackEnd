const notFound = (req, res) => {
	return res.status(404).send("<h2>Route Does not Exist !</h2>");
};

module.exports = notFound;
