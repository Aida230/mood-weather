export function getMeme(mood) {
  const moodMap = {
    "Energía positiva y claridad mental": "/gato-feliz2.jpg",
    "Perfecto para una caminata introspectiva": "/disociado.webp",
    "Melancólico pero reconfortante": "/llorar.jpeg",
    "Paciencia y belleza en lo simple": "/nieve.jfif",
    "Poder y transformación interior": "/grito.avif",
    "Momento de pausa y reflexión": "/sad.jpg",
    "Abierto a lo inesperado": "/gif-gato.gif"
  };

  return moodMap[mood] || "/llorar.jpeg";
}
