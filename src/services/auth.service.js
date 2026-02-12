import User from "../models/User.js";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken"
import { createJWT } from "../utils/jwt.js";
import ResetPassword from "../models/ResetPassword.js";
// import { config } from "dotenv";
import config from "../config/config.js";
import sendEmail from "../utils/email.js";

const login = async (data) => {
  const user = await User.findOne({
    $or: [{ email: data?.email }, { phone: data?.phone }],
  });
  if (!user)
    throw {
      status: 404,

      message: "Invalid Credentials",
    };

  const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
  if (!isPasswordMatch)
    throw {
      status: 400,
      message: "Incorrect email or password",
    };

  return {
    _id: user._id,
    name: user.name,
    address: user.address,
    email: user.email,
    phone: user.phone,
    roles: user.roles,
    isActive: user.isActive,
  };
};
const register = async (data) => {
  const user = await User.findOne({
    $or: [{ email: data?.email }, { phone: data?.phone }],
  });
  if (user)
    throw {
      status: 409,
      message: "User Already Exists ",
    };

  if (!data.password)
    throw {
      status: 400,
      message: "Password is required",
    };

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(data.password, salt);
  const createdUser = await User.create({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    password: hashedPassword,
  });
  return {
    _id: createdUser._id,
    name: createdUser.name,
    address: createdUser.address,
    email: createdUser.email,
    phone: createdUser.phone,
    roles: createdUser.roles,
    isActive: createdUser.isActive,
  };
};

const forgotPassword = async (email) => {
  const user = await User.findOne({ email });

  //never send message showing user is not found to avoid email enumeration attack
  if (!user) throw { status: 404, message: "User not found with this email" };

  const token = crypto.randomUUID();
  await ResetPassword.create({
    userId: user._id,
    token,
    isUsed: false,
  });
  const resetPasswordLink = `${config.appUrl}/reset-password?userId=${user._id}&token=${token}`;
  await sendEmail(email, {
    subject: "Reset Password Link",
    html: `
     <div
      style="
     text-align: center;
        padding: 16px;
        font-family: sans-serif;
      "
    >
      <h1>Please click the link to reset your password</h1>
      <a
        href="${resetPasswordLink}"
        style="
          background-color: rgb(21, 75, 75);
          color: white;
          padding: 5px 16px;
          text-decoration: none;
          border-radius: 8px;
        "
        >Reset Password</a
      >
    </div>`,
  });

  return { message: "Reset password link sent successfully" };

  // link:<app-url>/reset-password?userId=<userId>&token=<token>
};

const resetPassword = async (userId, token, password) => {
  // return {userId, token, password};
  const data = await ResetPassword.findOne({
    userId,
    expiresAt: { $gt: Date.now() },
  }).sort({ createdAt: -1 });

  if (!data || data.token != token)
    throw { status: 400, message: "Invalid or expired token" };

  if (data.isUsed) {
    throw { status: 400, message: "Link is already Used" };
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  await User.findByIdAndUpdate(userId, {
    password: hashedPassword,
  });

  await ResetPassword.findByIdAndUpdate(data._id, {
    isUsed: true,
  });

  return { message: "Password reset successfully" };

  //verify token and userId
};

export default { register, login, forgotPassword, resetPassword };
