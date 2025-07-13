export function getEmoji(weather) {
  const map = {
    "Clear": "☀️",
    "Mainly Clear": "🌤️",
    "Partly Cloudy": "⛅",
    "Clouds": "☁️",
    "Fog": "🌫️",
    "Drizzle": "🌦️",
    "Rain": "🌧️",
    "Snow": "❄️",
    "Thunderstorm": "⛈️",
    "Unknown": "❔"
  };
  return map[weather] || "❔";
}