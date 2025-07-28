import { getEmoji } from "../utils/getEmoji";
import { getActivityEmoji } from "../utils/getActivityEmoji";
import { getMeme } from "../utils/getMeme";
import MapView from "./MapView";

const WeatherResult = ({ data, onBackClick }) => {
  if (!data) return null;

  return (
    <div className="bg-black text-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* TEXTO - protagonista y PRIMERO en móvil */}
        <div className="relative p-8 sm:p-12 border border-blue-400 rounded-xl bg-white/10 backdrop-blur-md shadow-xl order-1 md:order-1 space-y-6">
          <p className="uppercase text-blue-400 text-sm">Resultado del clima</p>
          <h2 className="text-5xl sm:text-6xl font-bold flex items-center gap-4">
            <span className="text-6xl">{getEmoji(data.weather)}</span>
            {data.weather}
          </h2>

          <div className="text-gray-300 text-base sm:text-lg leading-relaxed space-y-2">
            <p><strong className="text-sky-300">📍 Ciudad:</strong> {data.city}</p>
            <p><strong className="text-yellow-300">🌡️ Temperatura:</strong> {data.temperature}</p>
            <p><strong className="text-pink-300">😊 Estado de ánimo:</strong> {data.mood}</p>
            <p><strong className="text-green-300">🏃 Actividad:</strong> {getActivityEmoji(data.activity)} {data.activity}</p>
            <p><strong className="text-purple-300">💬 Frase:</strong> “{data.quote}”</p>
          </div>

          <button
            onClick={onBackClick}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm"
          >
            Buscar otra ciudad
          </button>
        </div>

        {/* MAPA + MEME - segundo en móvil */}
        <div className="space-y-6 order-2 md:order-2">
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
  );
};

export default WeatherResult;
