const Product = require("./model");

module.exports = {
  actionReadProduct: async (req, res) => {
    try {
      let products = await products.find();

      res.status(201).json({ data: products });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
  actionCrateProduct: async (req, res) => {
    try {
      const payload = req.body;
      let products = await Product(payload);
      await products.save();

      res.status(201).json({ data: products });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
};
