import express from 'express';
import productController from '../controllers/product.Controller.js'; 

const router = express.Router();


router.get("/", productController.getProducts);


// /api/products/:id
router.get("/:id", productController.getProductById);





//POST/api/products
router.post("/",productController.createProduct);

//DELETE /api/products/:id
router.delete("/:id",productController.deleteProduct);

//PUT /api/products/:id
router.put("/:id",productController.updateProduct);


export default router;