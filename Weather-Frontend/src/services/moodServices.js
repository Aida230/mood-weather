import axios from "axios";

export const getMoodWeatherByCity = async (city) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/mood?city=${city}`);
  return res.data;
};