import mongoose from "mongoose";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "../constants/orderStatuses.js";
const orderSchema=new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: [true, "User is required."],
    ref: "User",
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: [true, "Product is required"],
      },
      quantity: {
        type: Number,
        default: 1,
        min:[1, "Select at least 1 item"],
      },
    },
  ],

  status: {
    type: String,
    default: ORDER_STATUS_PENDING,
    enum: [
      ORDER_STATUS_PENDING,
      ORDER_STATUS_CANCELLED,
      ORDER_STATUS_CONFIRMED,
      ORDER_STATUS_DELIVERED,
      ORDER_STATUS_SHIPPED,
    ],
  },
  shippingAddress: {
    city: {
      type: String,
      required: [true, "Shipping address City is required"], // Corrected from require to required
    },
    province: {
      type: String,
      required: [true, "Shipping address Province is required"], // Corrected from require to required
    },
    street: String,
    country: {
      type: String,
      default: "Nepal",
    },
  },
  totalPrice: {
    type: Number,
    required: [true, "Total Price is Required."],
  },
  orderNumber: {
    type: String,
    required: [true, "Order Number is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  payment:{
    type:mongoose.Schema.ObjectId,
    ref:"Payment",
  }
});

const model=mongoose.model("Order", orderSchema);
export default model;
