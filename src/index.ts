import dotenv from "dotenv";
import express from "express";
import "./database/data-source";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => {
  console.log("running app");
});
