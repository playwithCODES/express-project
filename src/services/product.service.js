import mongoose from "mongoose";
import Product from "../models/Product.js";

const getProducts = async () => {
  return await Product.find();
};

const getProductById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return await Product.findById(id);
};

const createProduct = async (data) => {
  return await Product.create(data);
};

const deleteProduct = async (id) => {
    await getProductById(id);
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return await Product.findByIdAndDelete(id);
};

const updateProduct = async (id, data) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;

  return await Product.findByIdAndUpdate(id, data, {
    new: true,            // ✅ updated data return
    runValidators: true,  // ✅ schema validators run
  });
};

export default {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
