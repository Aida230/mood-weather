export function getBackgroundColor(weather) {
  const map = {
    "Clear": "bg-gradient-to-br from-yellow-200 to-yellow-400", // Soleado
    "Clouds": "bg-gradient-to-br from-gray-300 to-gray-500",     // Nublado
    "Rain": "bg-gradient-to-br from-blue-400 to-blue-700",       // Lluvia
    "Snow": "bg-gradient-to-br from-blue-100 to-white",          // Nieve
    "Thunderstorm": "bg-gradient-to-br from-purple-700 to-black",// Tormenta
    "Fog": "bg-gradient-to-br from-gray-100 to-gray-300",        // Niebla
    "Unknown": "bg-gray-200"
  };

  return map[weather] || "bg-gray-200";
}