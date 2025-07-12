import { useState } from 'react'
import axios from 'axios'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetchMoodWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/mood?city=${city}`)
      setData(res.data)
      setError(null)
    } catch (err) {
      setError(err.response?.data?.error || 'Error al conectar con el servidor')
      setData(null)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Mood Weather 🌤️</h1>
      <input
        type="text"
        placeholder="Escribe una ciudad"
        className="p-2 border rounded text-black"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={fetchMoodWeather}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Buscar
      </button>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {data && (
        <div className="mt-6 text-left">
          <p><strong>Ciudad:</strong> {data.city}</p>
          <p><strong>Clima:</strong> {data.weather}</p>
          <p><strong>Temperatura:</strong> {data.temperature}</p>
          <p><strong>Estado de ánimo:</strong> {data.mood}</p>
          <p><strong>Actividad recomendada:</strong> {data.activity}</p>
          <p><strong>Frase del día:</strong> {data.quote}</p>
        </div>
      )}
    </div>
  )
}

export default App
