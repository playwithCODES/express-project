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
import { ROLE_ADMIN } from "./constants/roles.js";
import roleBasedAuth from "./middlewares/roleBasedAuth.js";




const app = express();

connectDB();

app.use(bodyParser.json());
app.use(logger);


app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
  });
});


// app.use(auth);
app.use("/api/products",productRouter);
app.use("/api/users",auth,roleBasedAuth(ROLE_ADMIN),userRoute);
app.use("/api/auth",authRoute);


app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`);
});
