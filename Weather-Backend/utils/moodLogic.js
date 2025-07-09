// Mapeo simple de climas a emociones, actividades y frases
const moodMap = {
  Clear: {
    mood: "Energía positiva y claridad mental",
    activity: "Haz algo creativo al aire libre",
    quote: "“El sol no se ha puesto aún sobre tus sueños.”"
  },
  Clouds: {
    mood: "Perfecto para una caminata introspectiva",
    activity: "Escucha un podcast tranquilo y sal a pasear",
    quote: "“Las nubes no pueden ocultar la luz que llevas dentro.”"
  },
  Rain: {
    mood: "Melancólico pero reconfortante",
    activity: "Tómate un café y escribe tus pensamientos",
    quote: "“La lluvia lava el alma.”"
  },
  Snow: {
    mood: "Paciencia y belleza en lo simple",
    activity: "Lee un libro con una bebida caliente",
    quote: "“Cada copo de nieve es una historia esperando ser contada.”"
  },
  Thunderstorm: {
    mood: "Poder y transformación interior",
    activity: "Haz journaling o dibuja tus emociones",
    quote: "“Incluso las tormentas más fuertes pasan.”"
  },
  Fog: {
    mood: "Momento de pausa y reflexión",
    activity: "Haz una meditación o estírate suavemente",
    quote: "“La niebla también enseña a mirar hacia dentro.”"
  }
};

// Esta función busca en el diccionario y devuelve el resultado
export function getMoodByWeather(weather) {
  return moodMap[weather] || {
    mood: "Abierto a lo inesperado",
    activity: "Haz algo espontáneo y diferente",
    quote: "“Cada día es una página en blanco.”"
  };
}
