import path from 'path';
import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const API_PREFIX = process.env.API_PREFIX ?? '/api/v1';
const PORT = process.env.PORT ?? 5000;

app.get(`${API_PREFIX}`, (req, res) => {
  res.send('API is running');
});

app.use(`${API_PREFIX}/products`, productRoutes);
app.use(`${API_PREFIX}/users`, userRoutes);
app.use(`${API_PREFIX}/orders`, orderRoutes);
app.use(`${API_PREFIX}/upload`, uploadRoutes);

app.get(`${API_PREFIX}/config/paypal`, (req, res, next) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
