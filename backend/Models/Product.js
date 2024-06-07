// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: String,
  stock: {
    type: Number,
    default: 0,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

export default model('Product', productSchema);
