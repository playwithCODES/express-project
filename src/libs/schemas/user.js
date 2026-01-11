import z from "zod";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "../../constants/roles.js";


const addressSchema = z.object({
    city:z.string(),
    province:z.string(),
    street:z.string().optional(),
    country:z.string().optional()
});     

const UserSchema = z.object({
    name:z.string(),
    email:z.email(),
    password:z.string().min(6),
    phone:z.string().min(6).max(13),
    address:addressSchema,
    roles: z.array(z.enum([ROLE_ADMIN, ROLE_MERCHANT,ROLE_USER])).optional(),
    profileImageUrl:z.string().optional(),
    isActive:z.boolean().optional()



});

export {UserSchema};