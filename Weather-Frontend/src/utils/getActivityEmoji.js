export function getActivityEmoji(activity) {
  const map = {
    "Haz algo creativo al aire libre": "🎨🌳",
    "Escucha un podcast tranquilo y sal a pasear": "🎧🚶",
    "Tómate un café y escribe tus pensamientos": "☕✍️",
    "Lee un libro con una bebida caliente": "📖☕",
    "Haz journaling o dibuja tus emociones": "📓🖌️",
    "Haz una meditación o estírate suavemente": "🧘‍♂️🤸‍♂️",
    "Haz algo espontáneo y diferente": "🎲✨"
  };

  return map[activity] || "🎯";
}