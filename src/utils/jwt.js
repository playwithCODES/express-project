// import { config } from "dotenv";
import config from "../config/config.js";
import jwt from "jsonwebtoken";

const createJWT = (data) => {
  // console.log(data);
  console.log("Using JWT_SECRET: ", config.jwtSecret);
  const token = jwt.sign(data, config.jwtSecret, {
    expiresIn: "30d",
  });

  return token;
};
const verifyJWT = async (token) => {
  return await new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, () => {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

export { createJWT, verifyJWT };
