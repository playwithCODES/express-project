import z from "zod";
const addressSchema = z.object({
  city: z.string({ error: "Shipping address city is required." }),
  province: z.string({ error: "Shipping address province is required." }),
  street: z.string().optional(),
  country: z.string().optional(),
});

const orderSchema = z.object({
 
  orderItems: z.array(
    z.object({
      product: z.string({ error: "Product is required." }),
    })
  ),

  // totalPrice:z.number({error:(value)=>{
  //     value===undefined
  //     ? "Total Price is required."
  //     : "Total Price must be a number.";
  // }}).min(1),

  //     quantity:z.number({error:(value)=>{
  //         value===undefined
  //         ? "Quantity is required."
  //         : "Quantity must be a number.";
  //     }}).min(1)
  // })).min(1,{message:"At least one order item is required."}),

  totalPrice: z.number({ error: "Total Price is required." }).min(0),

  shippingAddress: addressSchema,
});
export { orderSchema };
