const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

// Initialzie PrismaClient
const prisma = new PrismaClient();

// Get All Products
router.get("/", async (req, res, next) => {
	try {
		const allProducts = await prisma.product.findMany({
			include: { category: true },
		});

		const category = await prisma.category.findMany({
			include: { products: true },
		});
		res.json({ allProducts, category });
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	const { id } = req.params;

	try {
		const product = await prisma.product.findUnique({
			where: {
				id: +id,
			},
			include: {
				category: true,
			},
		});

		res.json(product);
	} catch (error) {
		next(error);
	}
});

// Create a New Product
router.post("/", async (req, res, next) => {
	const data = req.body;

	try {
		// const product = await prisma.product.create({
		// 	data: data,
		// });
		const product = await prisma.product.create({
			data: {
				name: data.name,
				price: data.price,
				categoryId: data.categoryId,
			},
		});
    
		res.json(product);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	const { id } = req.params;

	try {
		const deletedProduct = await prisma.product.delete({
			where: {
				id: +id,
			},
		});

		res.json(deletedProduct);
	} catch (error) {
		next(err);
	}
});

router.patch("/:id", async (req, res, next) => {
	const { id } = req.params;
	const data = req.body;

	try {
		const updatedProduct = await prisma.product.update({
			where: {
				id: +id,
			},
			data: data,
			include: {
				category: true,
			},
		});

		res.json(updatedProduct);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
