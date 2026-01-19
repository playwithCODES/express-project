import Order from "../models/Order.js"
import crypto from "crypto";

const createOrder=async(data, userId)=>{
    const orderNumber=crypto.randomUUID();


return await Order.create({...data, user: userId, orderNumber});
};

export default { createOrder};
