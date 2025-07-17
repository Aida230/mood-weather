import { useState } from "react";
import { getEmoji } from "../utils/getEmoji";
import { getActivityEmoji } from "../utils/getActivityEmoji";
import { getMeme } from "../utils/getMeme";
import MapView from "./MapView";

const WeatherResult = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <>
      {children(setData)}

      {data && (
        <div className="animate-fade-in mt-10 max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 text-left space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              {getEmoji(data.weather)} {data.weather}
            </h2>

            <div className="text-lg space-y-1 text-slate-100">
              <p>
                <span className="font-semibold text-sky-300">📍 Ciudad:</span> {data.city}
              </p>
              <p>
                <span className="font-semibold text-yellow-300">🌡️ Temperatura:</span> {data.temperature}
              </p>
              <p>
                <span className="font-semibold text-pink-300">😊 Estado de ánimo:</span> {data.mood}
              </p>
              <p>
                <span className="font-semibold text-green-300">🏃 Actividad:</span> {getActivityEmoji(data.activity)} {data.activity}
              </p>
              <p>
                <span className="font-semibold text-purple-300">💬 Frase:</span> “{data.quote}”
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
              <div className="rounded-lg overflow-hidden shadow-md border border-white/10">
                <MapView lat={data.lat} lon={data.lon} city={data.city} />
              </div>
              <img
                src={getMeme(data.mood)}
                alt="meme"
                className="rounded-xl shadow-xl object-contain w-full max-h-[300px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherResult;
