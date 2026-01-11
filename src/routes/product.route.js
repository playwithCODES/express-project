import express from 'express';
import productController from '../controllers/product.Controller.js'; 
import auth from '../middlewares/auth.js';
import roleBasedAuth from '../middlewares/roleBasedAuth.js';
import { ROLE_ADMIN, ROLE_MERCHANT } from '../constants/roles.js';
import { productSchema } from '../libs/schemas/products.js';
import validate from '../middlewares/validator.js';

const router = express.Router();


router.get("/", productController.getProducts);


// /api/products/:id
router.get("/:id", productController.getProductById);


//POST/api/products
router.post("/",
    auth,
    roleBasedAuth(ROLE_MERCHANT),
    validate(productSchema),
    productController.createProduct);

//DELETE /api/products/:id
router.delete("/:id",auth,roleBasedAuth(ROLE_ADMIN),productController.deleteProduct);

//PUT /api/products/:id
router.put("/:id",auth,productController.updateProduct);
export default router;