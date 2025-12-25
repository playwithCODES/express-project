import fs from "fs"
import productService from "../services/product.Service.js";
import { get } from "http";



const getProducts=(req,res)=>{
    const query=req.query;
    const data=productService.getProducts(query);  
    res.json(data);
} ;

const getProductById=(req,res)=>{
    // console.log(req.params);
    const id=req.params.id;

    const data=productService.getProductById(id);

    if(!data)return res.status(404).send("Product not found");
    res.json(data);
};

const createProduct=(req,res)=>{
    //create data
    console.log(req.body);

    productService.createProduct(req.body);

    res.status(201).send("Create product api");
}
export default {
    getProducts,
    getProductById,
    createProduct
    };