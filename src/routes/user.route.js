import express from "express";
import userController from "../controllers/user.controller.js";
import validate from "../middlewares/validator.js";
import { UserSchema } from "../libs/schemas/user.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router = express.Router();

router.get("/",
    roleBasedAuth("ADMIN"),
     userController.getUsers);

router.post("/",
    validate(UserSchema),
    roleBasedAuth("ADMIN"),
     userController.createUser);

     router.patch("/profile-image", userController.updateProfileImage);

export default router;
 