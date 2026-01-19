import express from "express";
import orderController from "../controllers/order.controller.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_USER } from "../constants/roles.js";
import validate from "../middlewares/validator.js";
import { orderSchema } from "../libs/schemas/order.js";

const router = express.Router();
router.post('/',
     auth,
     roleBasedAuth(ROLE_USER),
     validate(orderSchema),
      orderController.createOrder);

export default router;