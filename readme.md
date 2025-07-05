# Mood Weather ☁️💫

Una aplicación que combina el clima real con recomendaciones emocionales y actividades sugeridas, según el tiempo en tu ciudad.

## 🧩 Estructura del proyecto

Este proyecto está dividido en dos partes:

## 🔧 Backend

- Framework: Node.js + Express
- API externa: [OpenWeatherMap](https://openweathermap.org/)
- Funcionalidad: Dado el nombre de una ciudad, devuelve:
  - Clima actual
  - Temperatura
  - Estado de ánimo sugerido
  - Actividad recomendada
  - Frase inspiradora

## 🎯 Ejemplo de uso (endpoint)

GET /mood?city=Barcelona

**Respuesta:**

```json
{
  "city": "Barcelona",
  "weather": "Cloudy",
  "temperature": "18°C",
  "mood": "Perfecto para una caminata introspectiva",
  "activity": "Escucha un podcast tranquilo y sal a pasear",
  "quote": "“Las nubes no pueden ocultar la luz que llevas dentro.”"
}

