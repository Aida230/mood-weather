import express from "express";
import { handleMoodRequest } from "../controllers/moodController.js";

const router = express.Router();

// GET /mood?city=Barcelona
router.get("/", async (req, res) => {
  const city = req.query.city;

  try {
    const result = await handleMoodRequest(city);
    res.json(result); // estructura ya estandarizada desde el controlador
  } catch (error) {
    // Determinar si el error es de cliente (400) o servidor (500)
    const isClientError =
      error.message.includes("ciudad") ||
      error.message.includes("caracteres") ||
      error.message.includes("inválido");

    const statusCode = isClientError ? 400 : 500;

    res.status(statusCode).json({
      status: statusCode,
      error: "Error al procesar la solicitud",
      message: error.message,
    });
  }
});

export default router;
