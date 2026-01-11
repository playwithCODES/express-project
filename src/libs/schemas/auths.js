import z from "zod";
import { UserSchema } from "./user.js";

const loginSchema=z.object({
    email:z.email(),
    password:z.string().min(6),
    phone:z.string().min(6).max(13).optional()

});

const registerSchema=UserSchema;
export {loginSchema, registerSchema};