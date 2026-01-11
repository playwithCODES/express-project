import User from "../models/User.js";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken"
import { createJWT } from "../utils/jwt.js";

const login = async (data) => {
  const user = await User.findOne({$or:[{ email: data?.email },{ phone: data?.phone }]});
  if (!user)
    throw {
      status: 404,

      message: "Invalid Credentials",
    };

    const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
    if(!isPasswordMatch)throw{
        status:400,
         message:"Incorrect email or password"
    };

 

    return{
        _id:user._id,
        name:user.name,
        address:user.address,
        email:user.email,
        phone:user.phone,
        roles:user.roles,
        isActive:user.isActive

    }
};
const register = async (data) => {
  const user = await User.findOne({$or:[{ email: data?.email },{ phone: data?.phone }]});
  if (user)
    throw {
      status: 409,
      message: "User Already Exists ",
    };


    if(!data.password)throw{
      status:400,
        message:"Password is required"
    }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(data.password, salt);
  const createdUser= await User.create({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    password: hashedPassword,
  });
  return {
     
        _id:createdUser._id,
        name:createdUser.name,
        address:createdUser.address,
        email:createdUser.email,
        phone:createdUser.phone,
        roles:createdUser.roles,
        isActive:createdUser.isActive

    
  }
};

export default { register, login };
