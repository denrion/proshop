import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, '{PATH} is a required field'] },
    rating: { type: Number, required: [true, '{PATH} is a required field'] },
    comment: { type: String, required: [true, '{PATH} is a required field'] },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '{PATH} is a required field'],
    },
  },
  { timestamps: true }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '{PATH} is a required field'],
    },
    name: { type: String, required: [true, '{PATH} is a required field'] },
    image: { type: String, required: [true, '{PATH} is a required field'] },
    brand: { type: String, required: [true, '{PATH} is a required field'] },
    category: { type: String, required: [true, '{PATH} is a required field'] },
    description: {
      type: String,
      required: [true, '{PATH} is a required field'],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: [true, '{PATH} is a required field'],
      default: 0,
    },
    numReviews: {
      type: Number,
      required: [true, '{PATH} is a required field'],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, '{PATH} is a required field'],
      default: 0,
    },
    countInStock: {
      type: Number,
      required: [true, '{PATH} is a required field'],
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
