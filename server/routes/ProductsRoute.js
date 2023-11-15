import express from "express";
import Product from "../models/ProductsModal.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().limit(99);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
