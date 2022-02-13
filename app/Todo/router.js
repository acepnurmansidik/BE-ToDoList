const express = require("express");
const {
  viewTodo,
  actionCreateTodo,
  actionUpdateTodo,
  actionTodoDelete,
  actionToggleStatus,
} = require("./controller");
const router = express.Router();

router.get("/", viewTodo);
router.post("/", actionCreateTodo);
router.patch("/:id", actionUpdateTodo);
router.delete("/:id", actionTodoDelete);
router.patch("/change/:id", actionToggleStatus);

module.exports = router;
