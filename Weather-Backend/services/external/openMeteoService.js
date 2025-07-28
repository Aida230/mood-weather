import axios from "axios";

export async function getCurrentWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const res = await axios.get(url);
  const weather = res.data.current_weather;

  if (!weather) throw new Error("No se pudo obtener el clima actual");

  return weather;
}
