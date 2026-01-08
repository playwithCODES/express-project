import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
export default router;
 