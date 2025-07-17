import { useState } from "react";
import axios from "axios";
import { PropagateLoader } from "react-spinners";

const SearchForm = ({ onResult }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoodWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(`http://localhost:3000/mood?city=${city}`);
      onResult(res.data); // delegamos el resultado al padre
    } catch (err) {
      setError(err.response?.data?.error || "Error al conectar con el servidor");
      onResult(null); // limpiamos resultados si hay error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 text-center max-w-xl mx-auto">
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
          <PropagateLoader color="#3b82f6" size={10} speedMultiplier={0.5} />
        </div>
      )}

      {error && <p className="text-red-400 mt-4">{error}</p>}
    </div>
  );
};

export default SearchForm;
