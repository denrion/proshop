import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer')
  ) {
    res.status(401);
    throw new Error('Not authorized. No token!');
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error('Not authorized. Invalid token!');
  }
});

export const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }

  return next();
};
