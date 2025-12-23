import express from 'express';
import productController from '../controllers/product.Controller.js'; 

const router = express.Router();


router.get("/", productController.getProducts);


// /api/products/:id
router.get("/:id", productController.getProductById);


// router.get("/two", (req,res)=>{
//     res.json(["Iphone 14 pro max","Samsung s23 ultra"]);
// });


export default router;