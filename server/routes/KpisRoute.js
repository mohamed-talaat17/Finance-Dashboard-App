import exprees from "express";
import KPI from "../models/KpiModal.js";

const router = exprees.Router();

router.get("/", async (req, res) => {
  try {
    const kpisData = await KPI.find();
    res.status(200).json(kpisData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
