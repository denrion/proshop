import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
      lowercase: true,
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

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model('User', userSchema);

export default User;
