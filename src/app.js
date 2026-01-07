import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import config from "./config/config.js";
import productRouter from "./routes/product.Route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import connectDB from "./config/database.js";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";




const app = express();

connectDB();

app.use(bodyParser.json());
app.use(logger);
app.use(auth);

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
  });
});


// app.get("/test",
//   (req,res, next)=>{
//   console.log("This is the first middleware");
//   next();
//   },
// (req, res, next)=>{
//   console.log("This is the second middleware");
//   next();
// },
// (req,res,next)=>{
//   console.log("This is the third middleware");
//   // next();
// },
// (req, res)=>{
//   res.send("test");
// }
// )

app.use("/api/products",productRouter);
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);

app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`);
});
