import z from "zod";
import{
  ORDER_STATUS_PENDING,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_SHIPPED,   
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_DELIVERED,
}from "../../constants/orderStatuses.js";

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
    }),
  ),

  totalPrice: z.number({ error: "Total Price is required." }).min(0),

  shippingAddress: addressSchema,
});

const orderStatusSchema = z.object({
  status: z.enum([
    ORDER_STATUS_PENDING,
    ORDER_STATUS_CANCELLED,
    ORDER_STATUS_CONFIRMED,
    ORDER_STATUS_DELIVERED,
    ORDER_STATUS_SHIPPED,
  ]),
});

export { orderSchema, orderStatusSchema };
