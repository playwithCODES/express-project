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
import cookieParser from "cookie-parser";




const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cookieParser());  
// app.use(logger);


app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
  });
});


app.use("/api/auth",authRoute);
app.use(auth);
app.use("/api/products",productRouter);
app.use("/api/users",userRoute);


app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`);
});
