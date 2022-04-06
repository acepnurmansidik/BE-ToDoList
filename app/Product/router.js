const express = require("express");
const { actionReadProduct, actionCrateProduct } = require("./controller");
const router = express.Router();

router.get("/product", actionReadProduct);
router.post("/create-product", actionCrateProduct);
// router.patch("/:id", actionUpdateTodo);
// router.delete("/:id", actionTodoDelete);
// router.patch("/change/:id", actionToggleStatus);

module.exports = router;
