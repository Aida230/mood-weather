import { WeatherSnowflake20 } from "../components/Weather-icon";

function Header() {
  return (
    <header className="bg-blue-300">
        <WeatherSnowflake20 className="w-10 h-10" />  
      <div className="text-center p-2 rounded">
        <h1 className="text-4xl font-bold">Mood Weather 🌤️</h1>
        <p className="text-xl mt-2">Tu clima diario con una dosis de ánimo</p>
      </div>
    </header>
  );
}

export default Header;
