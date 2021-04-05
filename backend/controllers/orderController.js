import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

/**
 * @description   Create New Order
 * @route         GET /api/orders
 * @access        Private
 */
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }

  const order = new Order({
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    user: req.user._id,
  });

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);
});
