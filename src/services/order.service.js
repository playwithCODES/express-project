import { ORDER_STATUS_CANCELLED, ORDER_STATUS_CONFIRMED } from "../constants/orderStatuses.js";
import Order from "../models/Order.js"
import Payment from "../models/Payment.js"
import crypto from "crypto";
import { payViaKhalti } from "../utils/payment.js";



const getOrders=async()=>{
    return await Order.find()
    .populate("user", "name email phone")
    .populate("orderItems.product","name brand category price imageUrls");
}

const getOrdersBYUser=async(userId)=>{
    return await Order.find({user: userId})
    .sort({createdAt:-1})
    .populate("user", "name email phone")
    .populate("orderItems.product","name brand category price imageUrls");
}

const createOrder=async(data, userId)=>{
    const orderNumber=crypto.randomUUID();
 

return await Order.create({...data, user: userId, orderNumber});
};

const getOrderById=async(id)=>{
    const order=await Order.findById(id)
     .populate("user", "name email phone")
    .populate("orderItems.product","name brand category price imageUrls");
    if(!order)throw{
        status:404,
        message:"Order not found"
    }   
    return order;
}

const updateOrderStatus=async(id, status)=>{
    return await Order.findByIdAndUpdate(id, {status}, {new:true});
}

const cancelOrder=async(id, user)=>{
    const order=await getOrderById(id);
    if(!user.roles.includes("admin") && order.user._id !=user._id){
        throw{
            status:403,
            message:"Access Denied"
        }
    }
    return await Order.findByIdAndUpdate(id, {status:ORDER_STATUS_CANCELLED}, {new:true});
}

const deleteOrder=async(id)=>{
    await getOrderById(id);
    return await Order.findByIdAndDelete(id);
}  

const orderPaymentViaKhalti=async(id)=>{
const order=await getOrderById(id);


const orderPayment=await Payment.create({
    method:"ONLINE",
    amount:order.totalPrice,
});

await Order.findByIdAndUpdate(id, {payment: orderPayment._id  });

return await payViaKhalti({
    amount: order.totalPrice,
    purchaseOrderId:order.orderNumber,
    purchaserOrderName:order.orderItems[0].product.name,
    customer:order.user

})
}


const orderPaymentViaCash=async(id)=>{
const order=await getOrderById(id);


const orderPayment=await Payment.create({
    method:"CASH",
    amount:order.totalPrice,

});
return await Order.findByIdAndUpdate(id, {
    payment: orderPayment._id,
    status:ORDER_STATUS_CONFIRMED},
    {new:true}
);
}

//confirmOrder-payment
const confirmOrderPayment=async(id, status)=>{
    const order=getOrderById(id);

    if(status.toUpperCase()!== "COMPLETED"){
        await Payment.findByIdAndUpdate(order.payment._id, {status:"FAILED"});
        throw{
            status:400,
            message:"Payment Failed"
        }
    }


        await Payment.findByIdAndUpdate(order.payment._id, {status:ORDER_STATUS_CONFIRMED},
            {new:true}
        );
        // throw{
        //     status:400,
        //     message:"Payment Failed"
        // }
    }





//getOrdersByMerchant

export default { createOrder, getOrders, getOrdersBYUser,deleteOrder, cancelOrder, getOrderById, updateOrderStatus , orderPaymentViaKhalti, confirmOrderPayment, orderPaymentViaCash};