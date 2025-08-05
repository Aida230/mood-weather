# 📚 Documentación del Proyecto: MOOD-WEATHER

## 🧠 Descripción General

**MOOD-WEATHER** es una aplicación full-stack que conecta el estado del tiempo con un estado de ánimo, actividad y frase inspiradora para el usuario. El usuario introduce el nombre de una ciudad y la app responde con el clima actual y recomendaciones asociadas a ese clima.

---

## 🧩 Tecnologías Utilizadas

### 🔙 Backend
- **Backend Express en Render**, con **CORS** protegido y **rate limiter**
- **Node.js** con **Express**
- **Axios** (para llamadas HTTP)
- **dotenv** (para manejar variables de entorno)
- **express-rate-limit** (para limitar las peticiones por IP)
- **Open-Meteo API** (para datos del clima)
- **Nominatim (OpenStreetMap)** (para geolocalización)

### 🔜 Frontend
- **React 19** con **Vite** en **Vercel**, conectado al backend vía variable de entorno
- **Tailwind CSS** (para estilos)
- **Axios** (para peticiones al backend)
- **React Spinners** (indicadores de carga)

---

## 🔧 Estructura del Proyecto

\`\`\`
backend/
│
├── controllers/ # Lógica principal de negocio
│ └── moodController.js
│
├── routes/ # Definición de rutas Express
│ └── mood.js
│
├── services/ # Servicios del dominio
│ ├── weatherService.js
│ └── external/ # Integraciones externas
│ ├── geocodingService.js
│ ├── openMeteoService.js
│ └── weatherCodeMapper.js
│
├── utils/ # Lógica auxiliar
│ └── moodLogic.js
│
├── tests/ # Pruebas unitarias
│ └── getMoodByWeather.test.js
│
└── server.js # Entry point
\`\`\`

---

## 🏗️ Desarrollo Backend (API REST)

### 1. **Configuración del servidor (`server.js`)**
- Se crea un servidor Express.
- Se limita el número de peticiones por IP.
- Se configura `dotenv` para manejar variables sensibles como el puerto.
- Se habilita la ruta `/mood`.

\`\`\`js
app.use('/mood', moodRoute);
\`\`\`

---

### 2. **Ruta `/mood` (`mood.js`)**
- Ruta tipo `GET /mood?city=Barcelona`
- Se consulta el clima actual usando `weatherService.js`.
- Se transforma esa información en estado de ánimo, actividad y frase (usando `moodLogic.js`).

---

### 3. **Servicio del clima (`weatherService.js`)**
- Se traduce el nombre de la ciudad en coordenadas usando **Nominatim**.
- Luego, se consulta **Open-Meteo** con esas coordenadas.
- Se transforma el `weathercode` a un clima legible como `"Clear"` o `"Rain"`.

---

## 🧑‍🎨 Desarrollo Frontend (React + Tailwind)

### 1. **Inicialización (`main.jsx` + `index.html`)**
- Punto de entrada que renderiza el componente `<App />`.
- Se aplica Tailwind a través de `index.css`.

---

### 2. **Componente principal (`App.jsx`)**
- Permite al usuario escribir una ciudad.
- Usa `axios` para llamar a `http://localhost:3000/mood?city=...`.
- Muestra el clima, estado de ánimo, actividad y frase.
- Usa efectos visuales con Tailwind y un loader con `react-spinners`.

---

### 3. **Estilizado**
- Tailwind CSS está configurado y funcionando correctamente.
- Archivos CSS personalizados (`index.css`) agregan estilo base y animaciones.

---

### 4. **Configuración de Vite (`vite.config.js`)**
- Se integran los plugins de Tailwind y React.

\`\`\`js
plugins: [tailwindcss(), react()],
\`\`\`

---

## ✅ Scripts del proyecto (`package.json`)

\`\`\`json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "test": "vitest",
  "preview": "vite preview"
}
\`\`\`

---


# 🌦️ Mood-Weather – Despliegue Full Stack con Monorepo (Render + Vercel)

Este proyecto full stack está desarrollado en un **monorepo** llamado `Mood-Weather`, que contiene dos subcarpetas principales:

Mood-Weather/
├── Weather-Backend/ # Backend en Express
├── Weather-Frontend/ # Frontend con Vite + React + Tailwind


## 🚀 Backend: Desplegado en **Render**

### 🛠️ Configuración

1. Se creó un Web Service en [Render](https://render.com)
2. Se seleccionó el repositorio `mood-weather` desde GitHub
3. En la configuración del servicio se especificó:

| Campo             | Valor                           |
|-------------------|---------------------------------|
| Root Directory    | `Weather-Backend`               |
| Build Command     | `npm install`                   |
| Start Command     | `npm start`                     |
| Environment       | `Node`                          |
| Plan              | `Free`                          |



4. En el archivo `server.js`, se configuró **CORS** para permitir peticiones desde el frontend local y el dominio de Vercel:

```js
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mood-weather-frontend.vercel.app"
  ],
  methods: ["GET"],
  optionsSuccessStatus: 200
}));

```
## 🌐 Despliegue del Frontend en Vercel (desde Monorepo)

El frontend de este proyecto (`Weather-Frontend`) está desplegado en [Vercel](https://vercel.com), utilizando una subcarpeta dentro del monorepo `mood-weather`.

---

### ✅ Repositorio

- **Repositorio GitHub**: `mood-weather`
- **Subcarpeta utilizada**: `Weather-Frontend`

---

### ⚙️ Configuración de Vercel

| Campo                     | Valor                                          |
|---------------------------|------------------------------------------------|
| **Framework Preset**      | `Vite`                                         |
| **Root Directory**        | `Weather-Frontend`                             |
| **Build Command**         | `npm run build`                                |
| **Install Command**       | `npm install`                                  |
| **Output Directory**      | `dist`                                         |
| **Plan**                  | `Free`                                         |

---


