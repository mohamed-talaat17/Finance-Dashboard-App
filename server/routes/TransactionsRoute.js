import express from "express";
import TransactionsModal from "../models/TransactionsModal.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const transactions = await TransactionsModal.find().limit(50);
    // .sort({ createdOn: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
