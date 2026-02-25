import express from "express";
import orderController from "../controllers/order.controller.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_USER } from "../constants/roles.js";
import { ROLE_MERCHANT} from "../constants/roles.js";
import { ROLE_ADMIN } from "../constants/roles.js";
import validate from "../middlewares/validator.js";
import { orderSchema, orderStatusSchema } from "../libs/schemas/order.js";

const router = express.Router();

router.get("/", auth, roleBasedAuth(ROLE_ADMIN), orderController.getOrders);

router.get(
  "/user",
  roleBasedAuth(ROLE_USER),
  orderController.getOrdersBYUser,
);

router.post(
  "/",
  roleBasedAuth(ROLE_USER),
  validate(orderSchema),
  orderController.createOrder,
);

router.put("/:id/cancel",  orderController.cancelOrder);

router.delete(
  "/:id",
  roleBasedAuth(ROLE_ADMIN),
  orderController.deleteOrder,
);

router.get(
  "/merchant",
  roleBasedAuth(ROLE_MERCHANT),
  orderController.getOrdersByMerchant,
);

router.get(
  "/:id",
  roleBasedAuth(ROLE_USER),
  orderController.getOrderById,
);

router.put(
  "/:id/status",
  roleBasedAuth(ROLE_ADMIN),
  validate(orderStatusSchema),
  orderController.updateOrderStatus,
);

router.post(
  "/:id/payment/khalti",
  roleBasedAuth(ROLE_USER),
  orderController.orderPaymentViaKhalti,
);

router.put(
  "/:id/confirm-payment",
  roleBasedAuth(ROLE_USER),
  orderController.confirmOrderPayment,
);


router.post(  "/:id/payment/cash",
  roleBasedAuth(ROLE_USER),
  orderController.orderPaymentViaCash,
);




export default router;
