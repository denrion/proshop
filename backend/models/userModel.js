import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, '{PATH} is a required field'],
		},
		email: {
			type: String,
			required: [true, '{PATH} is a required field'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, '{PATH} is a required field'],
		},
		isAdmin: {
			type: Boolean,
			required: [true, '{PATH} is a required field'],
			default: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
