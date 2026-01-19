import mongoose from "mongoose";

const paymentSchema=new mongoose.Schema({
transactionId: String,
});

const  model= mongoose.model("Payment", paymentSchema);
export default model;