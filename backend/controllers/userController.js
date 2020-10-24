import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

/**
 * @description   Auth user & get token
 * @route         POST /api/users/login
 * @access        Public
 */
export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

  if(!user)

});
