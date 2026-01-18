import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product Name is Required"],
    minLength: [2, "Product name can not be less than 2"],
  },

  brand: String,
  category: String,
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [1, "Price must be greater than 1"],
    max: [99999, "Price can not be greater than 99999"],
  },
  // createdAt:{
  //     type:Date,
  //     default:Date.now()
  // },
  stock: {
    type: Number,
    default: 1,
  },
  imageUrls: [String],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Created by user is required."],
  },

  description: {
    type: String,
    maxLength: [500, "Description can not be more than 500 characters."],
  },
});

const model = mongoose.model("Product", productSchema);

export default model;
