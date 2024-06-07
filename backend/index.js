import connectToMongo from './database/db.js';
import express from "express";
import productRoutes from "./routes/product.js";
import orderRoutes from "./routes/order.js";
import userRoutes from "./routes/user.js";
import cors from "cors"

connectToMongo();
const app = express();
const port = 4000;


app.use(express.json());
app.use(cors())




app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
