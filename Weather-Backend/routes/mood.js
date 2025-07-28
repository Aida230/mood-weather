import express from "express";
import { handleMoodRequest } from "../controllers/moodController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const city = req.query.city;

  try {
    const result = await handleMoodRequest(city);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
