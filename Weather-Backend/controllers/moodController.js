import { getWeather } from "../services/weatherService.js";
import { getMoodByWeather } from "../utils/moodLogic.js";

export async function handleMoodRequest(city) {
  // 1. Limpiar y validar la ciudad
  const trimmedCity = city?.trim();

  if (!trimmedCity || typeof trimmedCity !== 'string' || trimmedCity.length < 2) {
    throw new Error("Por favor indica una ciudad válida");
  }

  // 2. Validación con expresión regular (solo letras, espacios y signos comunes)
  if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ'-]{2,50}$/.test(trimmedCity)) {
    throw new Error("El nombre de la ciudad contiene caracteres inválidos");
  }

  // 3. Obtener datos del clima
  const weatherData = await getWeather(trimmedCity);

  // 4. Calcular estado de ánimo según el clima
  const moodData = getMoodByWeather(weatherData.weather);

  // 5. Devolver toda la información unificada
  return {
    city: weatherData.city,
    weather: weatherData.weather,
    temperature: weatherData.temperature,
    lat: weatherData.lat,
    lon: weatherData.lon,
    mood: moodData.mood,
    activity: moodData.activity,
    quote: moodData.quote,
  };
}
