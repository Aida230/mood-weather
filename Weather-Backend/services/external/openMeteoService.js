import axios from "axios";

export async function getCurrentWeather(lat, lon) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const res = await axios.get(url);

    if (!res.data || !res.data.current_weather) {
      throw new Error("No se pudo obtener el clima actual");
    }

    return res.data.current_weather;
  } catch (error) {
    throw new Error(`Error al obtener el clima: ${error.message}`);
  }
}
