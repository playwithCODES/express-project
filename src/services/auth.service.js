import User from "../models/User.js"
const login=()=>{
    console.log("login");
};
const register=async(data)=>{
    const user=await User.findOne({ email: data.email});
    if(user)
        throw{
            status:409,
            message:"User Already Exists ",
    };
  return await User.create(data);
};
export default {register, login};