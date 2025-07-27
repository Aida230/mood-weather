import axios from "axios";

export const getMoodWeatherByCity = async (city) => {
  const res = await axios.get(`http://localhost:3000/mood?city=${city}`);
  return res.data;
};