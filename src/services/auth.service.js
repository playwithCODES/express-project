import User from "../models/User.js";
import bcrypt from "bcryptjs";

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

    return user;
};
const register = async (data) => {
  const user = await User.findOne({$or:[{ email: data?.email },{ phone: data?.phone }]});
  if (user)
    throw {
      status: 409,
      message: "User Already Exists ",
    };
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(data.password, salt);
  return await User.create({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    password: hashedPassword,
  });
};

export default { register, login };
