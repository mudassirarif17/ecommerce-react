import express from "express";
const router = express.Router();
import Order from "../Models/Order.js";


// Create a new order
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  try {
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user').populate('products.product');
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an order by ID
router.patch('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an order by ID
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
