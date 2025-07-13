import { useState } from "react";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import useResponsiveSize from "./hooks/useResponsiveSize";
import { getEmoji } from "./utils/getEmoji";
import { getActivityEmoji } from "./utils/getActivityEmoji.js";
import { getBackgroundColor } from "./utils/getBackgroundColor.js";
import MapView from "./components/MapView";


function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dotSize = useResponsiveSize();
  const bgClass = data
    ? getBackgroundColor(data.weather)
    : "bg-gradient-to-br from-white to-blue-600";

  const fetchMoodWeather = async () => {
    if (!city) return;
    setLoading(true);
    setData(null);
    try {
      const res = await axios.get(`http://localhost:3000/mood?city=${city}`);
      setData(res.data);
      console.log("DATA RECIBIDA DEL BACKEND:", res.data);
      setError(null);
    } catch (err) {
      setError(
        err.response?.data?.error || "Error al conectar con el servidor"
      );
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen p-8 text-center transition-all duration-500 ${bgClass}`}
    >
      <h1 className="text-5xl font-bold mb-4">Mood Weather 🌤️</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchMoodWeather();
        }}
      >
        <input
          type="text"
          placeholder="Escribe una ciudad"
          className="p-2 border rounded text-black"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Buscar
        </button>
      </form>

      {loading && (
        <div className="mt-4 flex justify-center">
          <PropagateLoader
            color="#3b82f6"
            size={dotSize}
            speedMultiplier={0.5}
          />
        </div>
      )}

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {data && !loading && (
        <div className="mt-6 space-y-2 animate-fade-in">
          <p>
            <strong>Ciudad:</strong> {data.city}
          </p>
          <p className="text-lg">
            <strong>Clima:</strong>
            {getEmoji(data.weather)} {data.weather}
          </p>
          <p>
            <strong>Temperatura:</strong> {data.temperature}
          </p>
          <p>
            <strong>Estado de ánimo:</strong> {data.mood}
          </p>
          <p>
            <strong>Actividad recomendada:</strong>
            {getActivityEmoji(data.activity)} {data.activity}
          </p>
          <p>
            <strong>Frase del día:</strong> {data.quote}
          </p>
          <MapView lat={data.lat} lon={data.lon} city={data.city} />
        </div>
      )}
    </div>
  );
}

export default App;
