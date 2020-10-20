import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

/**
 * @description   Fetch All Products
 * @route         GET /api/products
 * @access        Public
 */
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});

		res.json(products);
	})
);

/**
 * @description   Fetch Single Product
 * @route         GET /api/products/:id
 * @access        Public
 */
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (!product) return res.status(404).json({ message: 'Product not found' });

		res.json(product);
	})
);

export default router;