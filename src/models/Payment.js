import mongoose from "mongoose";
import { required } from "zod/mini";

const paymentSchema=new mongoose.Schema({
transactionId: String,
amount:{
    type:Number,
    required: [true, "Payment Amount is required"]
},
method:{
    type:String,
    required: [true, "Payment Method is required"],
    enum:["CARD","CASH","ONLINE"]
},
status:{
    type:String,
    default:"PENDING",
    enum:["PENDING","SUCCESSFUL","FAILED"]
},
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },

});

const  model= mongoose.model("Payment", paymentSchema);
export default model;