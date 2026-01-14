import z from "zod";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "../../constants/roles.js";


const addressSchema = z.object({
    city:z.string({error:"Address city is required."}),
    province:z.string({error:"Address province is required."}),
    street:z.string().optional(),
    country:z.string().optional()
});     

const UserSchema = z.object({
    name:z.string({error:"name is required"}),
    email:z.email({error:"Email is required."}),
    password:z.string({error:"Password is required."}).min(6),
    phone:z.string({error:"Phone is required."}).min(6).max(13),
    address:addressSchema,
    roles: z.array(z.enum([ROLE_ADMIN, ROLE_MERCHANT,ROLE_USER])).optional(),
    profileImageUrl:z.string().optional(),
    isActive:z.boolean().optional()



});

export {UserSchema};