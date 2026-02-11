import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import fs from "fs";
import config from "./config/config.js";
import productRouter from "./routes/product.Route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import orderRoute from "./routes/order.route.js";
import connectDB from "./config/database.js";
import connectCloudinary from "./config/cloudinary.js";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";
import cookieParser from "cookie-parser";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "./constants/roles.js";
import roleBasedAuth from "./middlewares/roleBasedAuth.js";
import uploadFile from "./utils/fileUploader.js";

const app = express();
const upload = multer({storage: multer.memoryStorage()});

connectDB();
connectCloudinary();

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




app.use("/api/products", upload.array("images", 5),productRouter);
app.use("/api/users", auth,upload.single("image"), userRoute);
app.use("/api/auth", authRoute);
app.use("/api/orders", orderRoute);

app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`);
});
