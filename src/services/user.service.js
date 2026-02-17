import { ROLE_ADMIN } from "../constants/roles.js";
import User from "../models/User.js";
import uploadFile from "../utils/fileUploader.js";
import authService from "./auth.service.js";

const createUser = async (data) => {
  return await authService.register(data);
};

const getUsers = async (query) => {
  const { name, limit, offset } = query;
  const sort = query.sort ? JSON.parse(query.sort) : {};
  const filters = {};
  if (name) filters.name = { $regex: name, $options: "i" };

  return await User.find(filters).sort(sort).limit(limit).skip(offset);
};

//updateProfileImage
const updateProfileImage = async (id, file) => {
  // return await User.findByIdAndUpdate(id, {profileImage: file?.path}, {new:true});

  const uploadedFile = await uploadFile([file]);
  return await User.findByIdAndUpdate(
    id,
    { profileImageUrl: uploadedFile[0]?.url },
    { new: true },
  );
};

const getUserById = async (id) => {
  const user = await User.findById(id);

  if (!user)
    throw {
      status: 400,
      message: "User not found.",
    };
  return user;
};




const updateUser = async (id, data, authUser) => {
  const user = await getUserById(id);

  if (authUser._id !== id && !authUser.roles.includes(ROLE_ADMIN))

    throw {
      status: 403,
      message: "Access Denied",
    };

  return await User.findByIdAndUpdate(
    id,
    {
      name: data?.name,
      address: data?.address,
      phone: data?.phone,
      isActive: data?.isActive,
    },
    { new: true },
  );
};


const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return {
    message: "User Deleted Successfully",
  };
};

const updateUserRoles=async(id, roles)=>{
    return await User.findByIdAndUpdate(id, {roles}, {new:true});

}

export default {
  createUser,
  getUsers,
  updateProfileImage,
  getUserById,
  updateUser,
  deleteUser,
  updateUserRoles
};
