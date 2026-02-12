import mongoose from "mongoose";

const ResetPasswordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "User Id is required"],
  },
  token: {
    type: String,
    required: [true, "Reset password token is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    //   expires:3600 //token will expire after 1 hour
  },

  expiresAt: {
    type: Date,
    default: Date.now() + 3600000, //token will expire after 1 hour
  },
  isUsed: {
    type: Boolean,
    default: false,
  },

});

const model=mongoose.model("ResetPassword",ResetPasswordSchema);

export default model;

