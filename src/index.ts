import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => {
  console.log("running app");
});
