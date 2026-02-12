import z from "zod";
import { UserSchema } from "./user.js";

const loginSchema=z.object({
    email:z.email(),
    password:z.string().min(6),
    phone:z.string().min(6).max(13).optional()

});

const forgotPasswordSchema=z.object({
    email:z.email(),
})

const resetPasswordSchema=z.object({
    password:z.string(),


})

const registerSchema=UserSchema;
export {loginSchema, registerSchema, forgotPasswordSchema, resetPasswordSchema};