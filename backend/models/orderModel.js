import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: [true, '{PATH} is a required field'],
		},
		orderItems: [
			{
				name: { type: String, required: [true, '{PATH} is a required field'] },
				qty: { type: Number, required: [true, '{PATH} is a required field'] },
				image: { type: String, required: [true, '{PATH} is a required field'] },
				price: { type: Number, required: [true, '{PATH} is a required field'] },
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Product',
					required: [true, '{PATH} is a required field'],
				},
			},
		],
		shippingAddress: {
			address: { type: String, required: [true, '{PATH} is a required field'] },
			city: { type: String, required: [true, '{PATH} is a required field'] },
			postalCode: {
				type: String,
				required: [true, '{PATH} is a required field'],
			},
			country: { type: String, required: [true, '{PATH} is a required field'] },
		},
		paymentMethod: {
			type: String,
			required: [true, '{PATH} is a required field'],
		},
		paymentResult: {
			id: { type: String },
			status: { type: String },
			update_time: { type: String },
			email_address: { type: String },
		},
		taxPrice: {
			type: Number,
			required: [true, '{PATH} is a required field'],
			default: 0.0,
		},
		shippingPrice: {
			type: Number,
			required: [true, '{PATH} is a required field'],
			default: 0.0,
		},
		totalPrice: {
			type: Number,
			required: [true, '{PATH} is a required field'],
			default: 0.0,
		},
		isPaid: {
			type: Boolean,
			required: [true, '{PATH} is a required field'],
			default: false,
		},
		paidAt: Date,
		isDelivered: {
			type: Boolean,
			required: [true, '{PATH} is a required field'],
			default: false,
		},
		deliveredAt: Date,
	},
	{ timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
