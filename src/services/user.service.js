import User from "../models/User.js"
const createUser=async (data)=>{
return await User.create(data);
}

const getUsers=async (data)=>{
return await User.find();
}
export default { createUser , getUsers};