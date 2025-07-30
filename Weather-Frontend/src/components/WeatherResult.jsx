import { getEmoji } from "../utils/getEmoji";
import { getActivityEmoji } from "../utils/getActivityEmoji";
import { getMemeByWeather } from "../utils/getMemeByWeather";
import MapView from "./MapView";

const WeatherResult = ({ data, onReset }) => {
  if (!data) return null;

  return (
    <div className="py-16 px-6 sm:px-12 text-white relative">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-90 blur-sm"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/fondo-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative  z-10 grid gap-6 grid-cols-1 md:grid-cols-2 auto-rows-max">

          <div className="col-span-1 md:col-span-2 bg-black/50 border border-blue-400 backdrop-blur-md rounded-xl p-6 sm:p-10 shadow-xl text-center">
            <p className="uppercase text-blue-400 text-sm mb-2">Resultado del clima</p>
            <h2 className="text-5xl sm:text-6xl font-bold flex justify-center items-center gap-4 mb-4">
              <span className="text-6xl">{getEmoji(data.weather)}</span>
              {data.weather}
            </h2>
            <p className="text-xl text-sky-300">📍 {data.city}</p>
            <p className="text-xl text-yellow-300">🌡️ {data.temperature}</p>
          </div>

          <div className="bg-black/50 border border-white/20  backdrop-blur-md rounded-xl p-6 shadow-lg text-center text-pink-300 font-semibold text-xl flex items-center justify-center">
            😊 Estado de ánimo: {data.mood}
          </div>

          <div className="bg-black/50 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg text-green-300 text-xl flex items-center justify-center text-center">
            🏃 {getActivityEmoji(data.activity)} {data.activity}
          </div>

          <div className="col-span-1 md:col-span-2 bg-black/50 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg text-purple-300 text-center text-xl">
            💬 “{data.quote}”
          </div>

          <div className="bg-black/50 border border-white/20 rounded-xl overflow-hidden shadow-lg">
            <MapView lat={data.lat} lon={data.lon} city={data.city} />
          </div>

          <div className="bg-black/50 border border-white/20 rounded-xl shadow-lg flex items-center justify-center p-4">
            <img
              src={getMemeByWeather(data.weather)}
              alt="meme"
              className="rounded-xl object-contain w-full max-h-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex justify-center z-10 relative">
        <button
          onClick={onReset}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm shadow-md"
        >
          🔄 Buscar otra ciudad
        </button>
      </div>
    </div>
  );
};

export default WeatherResult;
