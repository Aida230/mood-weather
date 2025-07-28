import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import { Search } from "lucide-react";
import { getMoodWeatherByCity } from "../services/moodServices";

const SearchForm = ({ onSearchComplete, resetTrigger }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (resetTrigger) {
      setCity("");
      setError(null);
    }
  }, [resetTrigger]);

  const fetchMoodWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const data = await getMoodWeatherByCity(city);
      onSearchComplete(data);
    } catch (err) {
      setError(
        err.response?.data?.error || "Error al conectar con el servidor"
      );
      onSearchComplete(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchMoodWeather();
        }}
        className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg"
      >
        <Search className="text-white mr-4" />
        <input
          type="text"
          placeholder="Buscar ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className="bg-transparent text-white placeholder-white outline-none w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full ml-4 transition duration-200"
        >
          Buscar
        </button>
      </form>

      {loading && (
        <div className="mt-4 flex justify-center">
          <PropagateLoader color="#3b82f6" size={20} speedMultiplier={0.6} />
        </div>
      )}

      {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
    </div>
  );
};

export default SearchForm;
