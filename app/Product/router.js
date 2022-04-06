const express = require("express");
const { actionReadProduct } = require("./controller");
const router = express.Router();

router.get("/product", actionReadProduct);
// router.post("/", actionCreateTodo);
// router.patch("/:id", actionUpdateTodo);
// router.delete("/:id", actionTodoDelete);
// router.patch("/change/:id", actionToggleStatus);

module.exports = router;
