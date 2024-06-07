import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/order.js";
import orderRoutes from "./routes/user.js";

const port = 4000;

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// app.use('/products', productRoutes);
// app.use('/users', userRoutes);
// app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
