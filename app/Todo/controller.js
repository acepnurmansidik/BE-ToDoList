const Todo = require("./model");

module.exports = {
  viewTodo: async (req, res) => {
    const todo = await Todo.find();

    res.status(200).json({ data: todo });
  },
  actionCreateTodo: async (req, res) => {
    const payload = req.body;
    let todo = await Todo(payload);
    await todo.save();

    res.status(201).json({ data: todo });
  },
  actionUpdateTodo: async (req, res) => {
    const { id } = req.params;
    const { title, status } = req.body;

    let todo = await Todo.findOneAndUpdate({ _id: id }, { title, status });

    todo = await Todo.findOne({ _id: todo._id });

    res.status(201).json({ data: todo });
  },
  actionTodoDelete: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findOneAndRemove({ _id: id });

    res.status(201).json({ data: todo });
  },
};
