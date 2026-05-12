import z from "zod";
const productSchema = z.object({
  name: z.string({ error: "Product name is required." }).min(2),
  brand: z.string().optional(),
  category: z.string().optional(),
  price: z.coerce.number().min(1).max(999999),

  stock: z.coerce.number().min(1).optional(),
  imageUrls: z.array(z.string()).optional(),
});
export { productSchema };
