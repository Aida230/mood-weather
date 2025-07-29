import { getEmoji } from "../utils/getEmoji";
import { getActivityEmoji } from "../utils/getActivityEmoji";
import { getMemeByWeather } from "../utils/getMemeByWeather";
import MapView from "./MapView";

const WeatherResult = ({ data, onReset }) => {
  if (!data) return null;

  return (
    <div className="bg-black text-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 auto-rows-max">
        
        {/* CLIMA - Prioridad en mobile */}
        <div className="order-1 md:order-1 col-span-1 md:col-span-2 bg-white/10 border border-blue-400 backdrop-blur-md rounded-xl p-6 sm:p-10 shadow-xl text-center">
          <p className="uppercase text-blue-400 text-sm mb-2">Resultado del clima</p>
          <h2 className="text-5xl sm:text-6xl font-bold flex justify-center items-center gap-4 mb-4">
            <span className="text-6xl">{getEmoji(data.weather)}</span>
            {data.weather}
          </h2>
          <p className="text-xl text-sky-300">📍 {data.city}</p>
          <p className="text-xl text-yellow-300">🌡️ {data.temperature}</p>
        </div>

        {/* ESTADO DE ÁNIMO */}
        <div className="order-2 md:order-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center text-pink-300 font-semibold text-lg flex items-center justify-center">
          😊 Estado de ánimo: {data.mood}
        </div>

        {/* ACTIVIDAD */}
        <div className="order-3 md:order-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg text-green-300 text-lg flex items-center justify-center text-center">
          🏃 {getActivityEmoji(data.activity)} {data.activity}
        </div>

        {/* FRASE */}
        <div className="order-4 md:order-4 col-span-1 md:col-span-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg text-purple-300 text-center text-lg">
          💬 “{data.quote}”
        </div>

        {/* MAPA */}
        <div className="order-5 md:order-5 bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-lg">
          <MapView lat={data.lat} lon={data.lon} city={data.city} />
        </div>

        {/* MEME */}
        <div className="order-6 md:order-6 bg-white/10 border border-white/20 rounded-xl shadow-lg flex items-center justify-center p-4">
          <img
            src={getMemeByWeather(data.weather)}
            alt="meme"
            className="rounded-xl object-contain w-full max-h-[300px]"
          />
        </div>

        {/* BOTÓN */}
        <div className="order-7 md:order-7 col-span-1 md:col-span-2 flex justify-center">
          <button
            onClick={onReset}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm shadow-md"
          >
            🔄 Buscar otra ciudad
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherResult;
