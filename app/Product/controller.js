const Product = require("./model");

module.exports = {
  actionReadProduct: async (req, res) => {
    try {
      let products = await Product.find();

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
  viewProductSpecific: async (req, res) => {
    try {
      const { id } = req.params;
      let products = await Product.findOne({ _id: id });

      res.status(201).json({ data: products });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
  actionUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const { qty } = req.body;

      let productUpdate = await Product.findOneAndUpdate({ _id: id }, { qty });

      productUpdate = await Product.findOne({ _id: productUpdate._id });

      res.status(201).json({ data: productUpdate });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;

      let product = await Product.findOneAndRemove({ _id: id });

      res.status(201).json({ data: product });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal server error` });
    }
  },
};
