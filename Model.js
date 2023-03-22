import mongoose from "mongoose";

const Todo = new mongoose.Schema(
  {
    date: { type: String },
    status: { type: Boolean },
    numberTodo: { type: Number },
    address: { type: String, required: true },
    category: { type: String, required: true },
    city: { type: String, required: true },
    contacts: { type: String, required: true },
    type: { type: String, required: true },
    text: { type: String, required: true },
    modalStatus: { type: Boolean, required: true },
    numberInList: { type: Number, required: true },
  },
  { collection: "todo" }
);
export default mongoose.model("Todo", Todo);
