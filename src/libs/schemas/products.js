import z from "zod";
const productSchema=z.object({
name:z.string({error:"Product name is required."}).min(2),
brand:z.string().optional(),
category:z.string().optional(),
price:z.string({error:(value)=>{
    value===undefined
    ? "Product price is required."
    : "Product price must be a number.";
}}).min(1).max(99999) ,
stock:z.number().min(1).optional(),
imageUrls:z.array(z.string()).optional()

});
export {productSchema};