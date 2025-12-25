import mongoose from "mongoose";
import config from "./config.js";
async function connectDB(){
    try {
       await mongoose.connect(config.mongodbUrl);
   
      console.log("Datebase Connection is successful");
    } catch (error) {
         console.log("Database Connection failed",error);
    }
   
  
}
export default connectDB;