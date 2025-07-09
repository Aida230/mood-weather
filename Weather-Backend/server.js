//Paso 1: impotar librerias
import express from 'express';
import dotenv from 'dotenv';
import moodRoute from './routes/mood.js'

//Paso 2: Configuramos dotenv para usar variables de entorno

dotenv.config();

//Paso 3: Crear el servidor con express

const app = express();

//Paso 4: Indicamos que use las rutas del /mood (esto lo crearé despues)

app.use('/mood', moodRoute);

//Paso 5: Definimos el puerto

const PORT = process.env.PORT || 3000;

//Paso 6: Encendemos el servidor

app.listen(PORT, () => {
  console.log(`Mood Weather API funcionando en http://localhost:${PORT}`)
});
