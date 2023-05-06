const router = require("express").Router();

router.get("/", async (req, res, next) => {
	res.send({ message: "Ok api is working 🚀" });
});

router.get("/:id", async (req, res, next) => {
	res.send({ message: "Ok api is working 🚀" });
});

router.post("/", async (req, res, next) => {
	res.send({ message: "Ok api is working 🚀" });
});

router.delete("/:id", async (req, res, next) => {
	res.send({ message: "Ok api is working 🚀" });
});

router.patch("/:id", async (req, res, next) => {
	res.send({ message: "Ok api is working 🚀" });
});

module.exports = router;
