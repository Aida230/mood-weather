import axios from 'axios';

// Función principal que recibe el nombre de la ciudad
export async function getWeather(city) {
  try {
    // 1️⃣ Obtenemos coordenadas desde Nominatim
    const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`;

    const geoRes = await axios.get(geoUrl);
    const location = geoRes.data[0];

    if (!location) {
      throw new Error('No se encontraron coordenadas para esta ciudad');
    }

    const lat = location.lat;
    const lon = location.lon;

    // 2️⃣ Llamamos a Open-Meteo con esas coordenadas
    const meteoUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    const meteoRes = await axios.get(meteoUrl);
    const weather = meteoRes.data.current_weather;

    if (!weather) {
      throw new Error('No se pudo obtener el clima actual');
    }

    // 3️⃣ Mapeamos el código de clima a palabras como "Clear", "Rain", etc.
    const weatherCode = mapWeatherCodeToName(weather.weathercode);

    return {
      city: location.display_name.split(',')[0],
      weather: weatherCode,
      temperature: `${weather.temperature}°C`
    };

  } catch (error) {
    throw new Error(`Error al obtener el clima: ${error.message}`);
  }
}

// Función auxiliar para traducir el código de clima
function mapWeatherCodeToName(code) {
  const codes = {
    0: 'Clear',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Clouds',
    45: 'Fog',
    51: 'Drizzle',
    61: 'Rain',
    71: 'Snow',
    95: 'Thunderstorm'
  };

  return codes[code] || 'Unknown';
}
