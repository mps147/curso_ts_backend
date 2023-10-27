import dotenv from "dotenv";
import express from "express";
import "./database/data-source";
import ProductController from "./controllers/product.controller";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/api/products", ProductController.findAll);

app.listen(PORT, () => {
  console.log("running app");
});
