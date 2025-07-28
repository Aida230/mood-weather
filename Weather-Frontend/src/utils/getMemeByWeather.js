// utils/getMemeByWeather.js

export function getMemeByWeather(weather) {
  const map = {
    Clear: "/gato-feliz2.jpg",
    Clouds: "/disociado.webp",
    Rain: "/llorar.jpeg",
    Snow: "/frio1jfif",
    Thunderstorm: "/grito.avif",
    Fog: "/sad.jpg",
    Drizzle: "/nieve.jfif",
    Unknown: "/gif-gato.gif"
  };

  return map[weather] || "/gif-gato.gif";
}
