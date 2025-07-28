import axios from "axios";

export async function getCoordinatesByCity(city) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`;
  const res = await axios.get(url);
  const location = res.data[0];

  if (!location) throw new Error("No se encontraron coordenadas para esta ciudad");

  return {
    lat: location.lat,
    lon: location.lon,
    displayName: location.display_name
  };
}
