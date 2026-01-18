import mongoose from "mongoose";
import config from "./config.js";
async function connectDB(){
    try {
       await mongoose.connect(config.mongodbUrl);
   
      console.log("Database Connection is successful");
    } catch (error) {
         console.log("Database Connection failed",error);
         process.exit(1);
    }
   
  
}
export default connectDB;