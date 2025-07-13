export function getMeme(mood) {
  const moodMap = {
    "Energía positiva y claridad mental": "/energetic.jfif",
    "Tristeza y reflexión": "/sad.jpg",
    "Relajación y descanso": "/relaxed.jpg",
    "Felicidad y motivación": "/happy.jpg",
  };

  return moodMap[mood] || "/sad.jpg"; // valor por defecto
}
