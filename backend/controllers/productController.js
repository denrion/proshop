import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

/**
 * @description   Fetch All Products
 * @route         GET /api/v1/products
 * @access        Public
 */
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/**
 * @description   Fetch Single Product
 * @route         GET /api/v1/products/:id
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

/**
 * @description   Delete Product
 * @route         DELETE /api/v1/products/:id
 * @access        Private / Admin
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  await product.remove();

  res.json({ message: 'Product removed' });
});

/**
 * @description   Create Product
 * @route         CREATE /api/v1/products
 * @access        Private / Admin
 */
export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

/**
 * @description   Edit Product
 * @route         PUT /api/v1/products/:id
 * @access        Private / Admin
 */
export const editProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;

  product.name = name;
  product.price = price;
  product.description = description;
  product.image = image;
  product.brand = brand;
  product.category = category;
  product.countInStock = countInStock;

  const updatedProduct = await product.save();

  res.status(200).json(updatedProduct);
});
