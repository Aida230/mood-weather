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
    throw new Error(`Error al obtener el clima: ${error.message}`);
  }
}
