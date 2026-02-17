import express from "express";
import userController from "../controllers/user.controller.js";
import validate from "../middlewares/validator.js";
import { UserSchema } from "../libs/schemas/user.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from '../constants/roles.js';
import { UpdateUserSchema } from "../libs/schemas/user.js";

const router = express.Router();

router.get("/",
    roleBasedAuth("ADMIN"),
     userController.getUsers);

router.post("/",
    validate(UserSchema),
    roleBasedAuth("ADMIN"),
     userController.createUser);

     router.patch("/profile-image", userController.updateProfileImage);

     router.get("/me", userController.getLoggedInUser);

     router.get("/:id", roleBasedAuth(ROLE_ADMIN),userController.getUserById);


     router.put("/:id",userController.updateUser);

    //  router.put("/:id", userController.updateUser);

     
     router.delete("/:id", roleBasedAuth(ROLE_ADMIN), userController.deleteUser);
     
     router.put("/:id/roles",roleBasedAuth(ROLE_ADMIN), validate(UpdateUserSchema),  userController.updateUserRoles);


export default router;
 