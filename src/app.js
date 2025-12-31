import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import config from "./config/config.js";
import productRouter from "./routes/product.Route.js";
import userRoute from "./routes/user.route.js";
import connectDB from "./config/database.js";




const app = express();

connectDB();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
  });
});



app.use("/api/products",productRouter);
app.use("/api/users",userRoute);

app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`);
});
