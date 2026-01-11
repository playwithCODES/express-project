import express from "express";
import authController from "../controllers/auth.controller.js";
import validate from "../middlewares/validator.js";
import { loginSchema, registerSchema } from "../libs/schemas/auths.js";

const router=express.Router();
router.post("/login",validate(loginSchema),authController.login);
router.post("/register",validate(registerSchema),authController.register);

export default router;
