const express = require("express");
const {
  actionReadProduct,
  actionCrateProduct,
  viewProductSpecific,
  actionUpdate,
  actionDelete,
} = require("./controller");
const router = express.Router();

router.get("/all", actionReadProduct);
router.get("/:id", viewProductSpecific);
router.post("/create-product", actionCrateProduct);
router.patch("/edit/:id", actionUpdate);
router.delete("/delete/:id", actionDelete);
// router.patch("/change/:id", actionToggleStatus);

module.exports = router;
