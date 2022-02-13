const express = require("express");
const {
  viewTodo,
  actionCreateTodo,
  actionUpdateTodo,
  actionTodoDelete,
} = require("./controller");
const router = express.Router();

router.get("/", viewTodo);
router.post("/", actionCreateTodo);
router.patch("/:id", actionUpdateTodo);
router.delete("/:id", actionTodoDelete);

module.exports = router;
