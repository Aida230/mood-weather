// Paso 1: importar librerías
import rateLimit from 'express-rate-limit';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import moodRoute from './routes/mood.js';

dotenv.config();

const app = express();

// Paso 2: aplicar Helmet
app.use(helmet());

// Paso 3: configurar CORS
app.use(cors({
  origin: [
    "http://localhost:5173", //fronted en desarrollo
    "https://mood-weather-frontend.vercel.app" //frontend en produccion
  ],
  methods: ["GET"],
  optionsSuccessStatus: 200
}));

// Paso 4: rate limiter
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: {
    status: 429,
    error: "Demasiadas peticiones desde esta IP, intenta más tarde."
  }
});

app.use(limiter);

// Paso 5: rutas
app.use('/mood', moodRoute);

// Paso 6: puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🔥 Versión con CORS actualizado");
});
