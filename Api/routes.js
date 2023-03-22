"use strict";
import express from "express";
import {
  addTask,
  fetchTodo,
  showModalStatus,
  toggleTodo,
} from "./controllers.js";
var router = express.Router();

router.post("/todo/addtask", addTask);
router.get("/todo/fetchtodo", fetchTodo);
router.put("/todo/toggletodo/:id", toggleTodo);
router.put("/todo/showmodaltodo/:id", showModalStatus);

export default router;
