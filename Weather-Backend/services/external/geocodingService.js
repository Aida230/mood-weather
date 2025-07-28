import axios from "axios";

export async function getCoordinatesByCity(city) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`;
    const res = await axios.get(url);

    if (!res.data || res.data.length === 0) {
      throw new Error("Ciudad no encontrada");
    }

    const location = res.data[0];

    return {
      lat: location.lat,
      lon: location.lon,
      displayName: location.display_name
    };
  } catch (error) {
    throw new Error(`Error al obtener coordenadas: ${error.message}`);
  }
}
