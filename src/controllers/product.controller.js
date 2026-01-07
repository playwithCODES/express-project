import fs from "fs";
import productService from "../services/product.Service.js";
import { get } from "http";
import { verifyJWT } from "../utils/jwt.js";

const getProducts = async (req, res) => {
    const query= req.query;
    const data = await productService.getProducts(query);
    res.json(data);
 
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await productService.getProductById(id);

    res.json(data);
  } catch (error) {
    res.status(error.status || 404).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  
  try {
    const result=await verifyJWT(token);
    console.log(result);
    const createdProduct = await productService.createProduct(req.body);
    res.status(201).send(createdProduct);
  } catch (error) {
    return res.status(400).send(error?.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);
    res.json({ message: "Product deleted successfully", id: req.params.id });
    if (!deleted)
      return res.status(400).json({ message: "Invalid product id" });
  } catch (error) {
    return res.status(400).send(error?.message);
  }
};
const updateProduct = async (req, res) => {
  try {
    const updated = await productService.updateProduct(req.params.id, req.body);
    if (!updated)
      return res.status(400).json({ message: "Invalid product id" });
    res.status(201).json(updated);
  } catch (error) {
    return res.status(400).send(error?.message);
  }
};

export default {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
