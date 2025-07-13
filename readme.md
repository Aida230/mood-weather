# 🌤️ MOOD-WEATHER

**MOOD-WEATHER** es una aplicación full-stack que combina datos meteorológicos reales con una capa emocional para generar un estado de ánimo, actividad sugerida y frase inspiradora basados en el clima de cualquier ciudad del mundo.

---

## 🧩 ¿Cómo funciona?

1. El usuario escribe una ciudad en la interfaz web.
2. El frontend hace una petición al backend.
3. El backend:
   - Usa OpenStreetMap para obtener coordenadas de la ciudad.
   - Usa Open-Meteo para obtener el clima actual.
   - Asigna un estado de ánimo, actividad y frase según el tipo de clima.
4. El frontend muestra toda la información de forma estilizada.

---

## 🖥️ Tecnologías utilizadas

### Frontend
- ⚛️ React (con Vite)
- 💨 Tailwind CSS
- 📡 Axios

### Backend
- 🌐 Express
- 🔒 Express Rate Limit (limita peticiones)
- 🧩 Axios
- 📦 dotenv
- 🌍 APIs externas: [OpenStreetMap](https://nominatim.openstreetmap.org), [Open-Meteo](https://open-meteo.com)

---


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

