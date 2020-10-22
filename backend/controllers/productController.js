import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

/**
 * @description   Fetch All Products
 * @route         GET /api/products
 * @access        Public
 */
export const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

/**
 * @description   Fetch Single Product
 * @route         GET /api/products/:id
 * @access        Public
 */
export const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		res.status(404);
		throw new Error('Product not found');
	}

	res.json(product);
});

// const createProduct = asyncHandler(async (req, res) => {});

// const editProduct = asyncHandler(async (req, res) => {});

// const deleteProduct = asyncHandler(async (req, res) => {});
