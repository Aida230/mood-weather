//Paso 1: impotar librerias
import cors from 'cors'
import rateLimit from 'express-rate-limit';
import express from 'express';
import dotenv from 'dotenv';
import moodRoute from './routes/mood.js'

//Paso 2: Configuramos dotenv para usar variables de entorno

dotenv.config();

//Paso 3: Crear el servidor con express

const app = express();

//Limitador de peticiones (100 por hora por IP)
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 100, // Máximo 100 peticiones por IP por hora
  message: {
    status: 429,
    error: "Demasiadas peticiones desde esta IP, intenta más tarde."
  }
});

app.use(limiter); // Se aplica a todas las rutas
app.use(cors({
  origin: 'http://localhost:5173' // permite peticiones solo desde tu frontend
}));

//Paso 4: Indicamos que use las rutas del /mood (esto lo crearé despues)

app.use('/mood', moodRoute);

//Paso 5: Definimos el puerto

const PORT = process.env.PORT || 3000;

//Paso 6: Encendemos el servidor

app.listen(PORT, () => {
  console.log(`Mood Weather API funcionando en http://localhost:${PORT}`)
});
