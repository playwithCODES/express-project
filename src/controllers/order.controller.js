import orderService from "../services/order.service.js";

const getOrders=async(req, res)=>{
try {
    const data=await orderService.getOrders();
    res.json(data);
} catch (error) {
    res.status(400).send(error?.message);
}
}

const getOrdersBYUser=async(req, res)=>{
try {
    const data=await orderService.getOrdersBYUser(req.user._id);
    res.json(data);
} catch (error) {
    res.status(400).send(error?.message);
}
}



const createOrder=async(req, res)=>{
try {
    const data=await orderService.createOrder(req.body, req.user._id);
    res.status(201).json(data);
} catch (error) {
    res.status(400).send(error?.message);
}
}

const cancelOrder=async(req, res)=>{
try {
    const data=await orderService.cancelOrder(req.params.id, req.user);
    res.status(201).json(data);
} catch (error) {
    res.status(error.status || 400).send(error?.message);
}
}

const deleteOrder=async(req, res)=>{
try {
    const data=await orderService.deleteOrder(req.params.id);
    res.json(data);
} catch (error) {
    res.status(error.status || 400).send(error?.message);
}
}


export default {createOrder, getOrders, getOrdersBYUser, cancelOrder, deleteOrder};