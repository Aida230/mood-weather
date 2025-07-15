// src/components/WeatherResult.jsx
import React from "react";
import { getEmoji } from "../utils/getEmoji";
import { getActivityEmoji } from "../utils/getActivityEmoji";
import MapView from "./MapView"; // Asegúrate de que este componente exista
import { getMeme } from "../utils/getMeme"; // Asegúrate de tener esta función

const WeatherResult = ({ data }) => {
  return (
    <div className="mt-6 space-y-2 animate-fade-in">
      <p>
        <strong>Ciudad:</strong> {data.city}
      </p>
      <p className="text-lg">
        <strong>Clima:</strong> {getEmoji(data.weather)} {data.weather}
      </p>
      <p>
        <strong>Temperatura:</strong> {data.temperature}
      </p>
      <p>
        <strong>Estado de ánimo:</strong> {data.mood}
      </p>
      <p>
        <strong>Actividad recomendada:</strong>{" "}
        {getActivityEmoji(data.activity)} {data.activity}
      </p>
      <p>
        <strong>Frase del día:</strong> {data.quote}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-center">
        <MapView lat={data.lat} lon={data.lon} city={data.city} />
        <img
          src={getMeme(data.mood)}
          alt="meme"
          className="rounded-lg shadow-lg max-h-[400px] w-full object-contain"
        />
      </div>
    </div>
  );
};

export default WeatherResult;
