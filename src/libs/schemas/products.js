import z from "zod";
const productSchema=z.object({
name:z.string().min(2),
brand:z.string().optional(),
category:z.string().optional(),
price:z.number().min(1).max(99999) ,
stock:z.number().min(1).optional(),
imageUrls:z.array(z.string()).optional()

});
export {productSchema};