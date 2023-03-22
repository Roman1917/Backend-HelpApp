import Todo from "../Model.js";
import { format } from "date-fns";
export const addTask = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      date: format(new Date(), "dd.MM.yyyy ") + format(new Date(), "HH:mm"),
      status: false,
      modalStatus: true,
      numberTodo: Math.floor(Math.random() * 10000),
      address: req.body.address,
      category: req.body.category,
      city: req.body.city,
      contacts: req.body.contacts,
      text: req.body.text,
      type: req.body.type,
      numberInList: req.body.numberInList,
    });

    return res.json({ todo: newTodo });
  } catch (err) {
    console.log("🚀 ~ file: controllers.js:17 ~ err", err);

    return res.json({ status: "error", error: "Todo not added", todo: false });
  }
};

export const fetchTodo = async (req, res) => {
  try {
    const getTodo = await Todo.find();

    return res.json(getTodo);
  } catch (err) {
    console.log("🚀 ~ file: controllers.js:31 ~ cosntfetchTodo= ~ err", err);
  }
};

export const toggleTodo = async function (req, res) {
  const id = req.body.id;
  const updatedTodo = req.body.status;
  const numberTodo = req.body.numberTodo;

  try {
    const item = await Todo.findById(id);
    let toggleTodo;
    if (item?.numberTodo === numberTodo) {
      toggleTodo = await Todo.findByIdAndUpdate(id, {
        $set: {
          status: !updatedTodo,
        },
      });
    }
    return res.json({ todo: toggleTodo });
  } catch (err) {
    console.log("🚀 ~ file: server.mjs ~ line 92 ~ app.delete ~ e", err);
  }
};

export const showModalStatus = async function (req, res) {
  const id = req.body.id;
  const modalStatus = req.body.modalStatus;
  try {
    let showModalTodo;
    showModalTodo = await Todo.findByIdAndUpdate(id, {
      $set: {
        modalStatus: !modalStatus,
      },
    });

    return res.json({ todo: showModalTodo });
  } catch (err) {
    console.log("🚀 ~ file: controllers.js:69 ~ showModalStatus ~ err", err);
  }
};
