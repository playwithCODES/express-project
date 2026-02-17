import User from "../models/User.js"
import uploadFile from "../utils/fileUploader.js";
const createUser=async (data)=>{
return await User.create(data);
}

const getUsers=async (query)=>{
    const {name , limit, offset}=query;
    const sort=query.sort? JSON.parse(query.sort):{};
    const filters={};
    if(name) filters.name={ $regex:name, $options:"i" };


return await User.find(filters).sort(sort).limit(limit).skip(offset);
}

//updateProfileImage
const updateProfileImage=async (id,file)=>{
    // return await User.findByIdAndUpdate(id, {profileImage: file?.path}, {new:true});

    const uploadedFile=await uploadFile([file]);
    return await User.findByIdAndUpdate(id, {profileImageUrl: uploadedFile[0]?.url}, {new:true});
}

const getUserById=async(id)=>{
    return await User.findById(id);

};

const updateUser=async(id, data)=>{
    return await User.findByIdAndUpdate(id, data, {new : true});


};
const deleteUser=async(id)=>{
    await User.findByIdAndDelete(id);

}

export default { createUser , getUsers, updateProfileImage, getUserById, updateUser, deleteUser};