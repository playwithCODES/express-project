import mongoose from "mongoose";
import Product from "../models/Product.js";
import { $ZodAny } from "zod/v4/core";

const getProducts = async (query) => {
  console.log(query);
  const { category, brand, name, min, max, offset,limit,  createdBy } = query;
  const filters = {};
  const sort = query.sort ? JSON.parse(query.sort) : {};

  // console.log(brand.split(","));

  if (category) filters.category = category; //Exact Match
  if (brand) filters.brand = { $in: brand.split(",") }; //Match data from the list of items
  if (name) filters.name = { regex: name, $options: "i" }; //Ilike match
  if (min) filters.price = { $gte: min };
  if (max) filters.price = { ...filters.price, $lte: max };
  if (createdBy) filters.createdBy = createdBy;
  console.log(filters);
  return await Product.find(filters).sort(sort).limit(limit).skip(offset);
};

const getProductById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return await Product.findById(id);
};

const createProduct = async (data, userId) => {
  return await Product.create({ ...data, createdBy: userId });
};

const deleteProduct = async (id) => {
  await getProductById(id);
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return await Product.findByIdAndDelete(id);
};

const updateProduct = async (id, data) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;

  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export default {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
