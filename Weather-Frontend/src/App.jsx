import SearchForm from "./components/SearchForm";
import WeatherResult from "./components/WeatherResult";

function App() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-indigo-900 via-sky-900 to-blue-800 text-white">
      <WeatherResult>
        {(onResult) => <SearchForm onResult={onResult} />}
      </WeatherResult>
    </div>
  );
}

export default App;
