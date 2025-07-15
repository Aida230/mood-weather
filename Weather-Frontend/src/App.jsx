import { useState } from "react";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import useResponsiveSize from "./hooks/useResponsiveSize";
import { getBackgroundColor } from "./utils/getBackgroundColor.js";
import WeatherResult from "./components/WeatherResult";
import SearchForm from "./components/SearchForm";

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
      <SearchForm city={city} setCity={setCity} onSubmit={fetchMoodWeather} />
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
      {data && !loading && <WeatherResult data={data} />}
    </div>
  );
}

export default App;
