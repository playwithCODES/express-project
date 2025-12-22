import express from "express";
import fs from "fs";
import config from "./config/config.js";
import productRouter from "./routes/product.Route.js";
import { version } from "os";
const app = express();

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
  });
});

// app.get("/about", (req, res) => {
//   res.send("This is the about page of my website");
// });

// app.get("/contact", (req, res) => {
//   res.send({
//     phone: 9801234567,
//     email: "omprakashrajbanshi627@gmail.com",
//     address: "Biratnagar-8,Sangam Chowk",
//   });
// });

// app.post("/", (req, res) => {
//   res.status(201).send("create data home page");
// });

// // app.put();
// app.put("/", (req, res) => {
//   res.send("update data home page");
// });

// // app.delete();/
// app.delete("/", (req, res) => {
//   res.status(403).send("delete data home page");
// });

// app.get("/products", (req, res) => {
//   const products = fs.readFileSync("data/products.json", "utf-8");

//   const data = JSON.parse(products);
//   res.json(data);
// });

// app.get("/admin", (req, res) => {
//   if (config.feature.admin.enabled) {
//     res.send("Admin Panel");
//   } else {
//     res.status(400).send("Admin Panel is disabled");
//   }
// });

app.use("/api/products",productRouter);

app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`);
});
