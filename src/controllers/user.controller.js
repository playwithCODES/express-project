import userService from "../services/user.service.js"
const createUser=async (req,res)=>{
    try{
        const data=await userService.createUser(req.body); 
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send(error?.message);
    }
}
const getUsers=async (req,res)=>{
    try{
        const data=await userService.getUsers(req.body); 
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send(error?.message);
    }
}
export default {createUser, getUsers};