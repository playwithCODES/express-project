import fs from "fs"
import productService from "../services/product.Service.js";
import { get } from "http";



const getProducts=(req,res)=>{
    const data=productService.getProducts();  
    res.json(data);
} ;

const getProductById=(req,res)=>{
    // console.log(req.params);
    const id=req.params.id;

    const data=productService.getProductById(id);

    res.json(data);
};
export default {
    getProducts,
    getProductById,
    };