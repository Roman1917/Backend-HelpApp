import express from "express";
import mongoose from "mongoose";
import todo from "./Api/routes.js";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;
const DB_URL =
  "mongodb+srv://Roma:WX3QLcE1ihxV9ZlJ@cluster0.y0mdmt6.mongodb.net/?retryWrites=true&w=majority";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", todo);

mongoose
  .set("strictQuery", false)
  .connect(DB_URL)
  .then(() => console.log("Connected DataBase"))
  .catch((err) => {
    console.log("Error with connection to DataBase", err);
  });

app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
