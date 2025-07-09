import express from "express";
import { getWeather } from "../services/weatherServices.js"; //lo crearé despues
import { getMoodWeather } from "../utils/moodLogic.js"; //Lo crearé despues

//Crear el enrutador
const router = express.Router();

//Definimos la ruta: GET /mood?city=Barcelona
router.get("/", async (req, res) => {
  const city = req.query.city; // Leemos el parámetro "city" de la URL

  if (!city) {
    //si no hay ciudad devolvemos un error
    return res.status(400).json({ error: "Por favor indica una ciudad" });
  }

  try {
    // Obtenemos los datos del clima
    const weatherData = await getWeather(city);

    // Generamos el estado de ánimo, actividad y frase basados en el clima
    const moodData = getMoodByWeather(weatherData.weather);

    // Devolvemos todo junto
    res.json({
      city: weatherData.city,
      weather: weatherData.weather,
      temperature: weatherData.temperature,
      mood: moodData.mood,
      activity: moodData.activity,
      quote: moodData.quote,
    });
  } catch (error) {
    //Si algo sale mal, ciudad incorrecta o sin conexion
    res
      .status(500)
      .json({ error: "No se puede obtener el clima", message: error.message });
  }
});

export default router;
