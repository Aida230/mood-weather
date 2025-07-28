export function mapWeatherCodeToName(code) {
  const codes = {
    0: "Clear",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Clouds",
    45: "Fog",
    51: "Drizzle",
    61: "Rain",
    71: "Snow",
    95: "Thunderstorm"
  };
  return codes[code] || "Unknown";
}
