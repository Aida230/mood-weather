import { getCoordinatesByCity } from "./external/geocodingService.js";
import { getCurrentWeather } from "./external/openMeteoService.js";
import { mapWeatherCodeToName } from "./external/weatherCodeMapper.js";

export async function getWeather(city) {
  try {
    const { lat, lon, displayName } = await getCoordinatesByCity(city);
    const weather = await getCurrentWeather(lat, lon);
    const weatherCode = mapWeatherCodeToName(weather.weathercode);

    return {
      city: displayName.split(",")[0],
      weather: weatherCode,
      temperature: `${weather.temperature}°C`,
      lat,
      lon
    };
  } catch (error) {
    // Importante: solo lanzamos el mensaje legible
    throw new Error(error.message || "Error inesperado al obtener el clima");
  }
}
