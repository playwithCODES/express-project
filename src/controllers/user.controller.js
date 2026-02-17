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
    console.log(req.user);
    try{
        const data=await userService.getUsers(); 
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send(error?.message);
    }
}

//updateProfileImage
const updateProfileImage=async (req,res)=>{
    console.log(req.user);
    try{
        const data=await userService.updateProfileImage(req.user._id, req.file); 
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send(error?.message);
    }
}

const getUserById=async (req,res)=>{
    console.log(req.user);
    try{
        const data=await userService.getUserById(req.params.id); 
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send(error?.message);
    }
}
const updateUser=async (req,res)=>{
    console.log(req.user);
    try{
        const data=await userService.updateUser(req.params.id, req.body, req.user); 
        res.status(201).json(data);
    }
    catch(error){
        res.status(error?.status || 400).send(error?.message);
    }
}

const updateUserRoles=async (req,res)=>{
    console.log(req.user);
    try{
        const data=await userService.updateUserRoles(req.params.id, req.body.roles); 
        res.status(201).json(data);
    }
    catch(error){
        res.status(error?.status || 400).send(error?.message);
    }
}


const deleteUser=async (req,res)=>{
    console.log(req.user);
    try{
        const data=await userService.deleteUser(req.params.id); 
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send(error?.message);
    }
}

const getLoggedInUser=async (req,res)=>{
    console.log(req.user);
    try{
        const data=await userService.getUserById(req.user._id); 
        res.status(201).json(data);
    }
    catch(error){
        res.status(400).send(error?.message);
    }
}






export default {createUser, getUsers, updateProfileImage, getUserById, updateUser, deleteUser, getLoggedInUser, updateUserRoles};