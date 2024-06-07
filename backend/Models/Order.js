import mongoose , {model} from "mongoose";
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema.Types;

const orderSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      product: {
        type: ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
  },
  datePlaced: {
    type: Date,
    default: Date.now,
  },
});

export default model('Order', orderSchema);
