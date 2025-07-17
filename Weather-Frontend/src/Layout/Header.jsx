import { WeatherSnowflake20 } from "../components/Weather-icon";

function Header() {
  return (
    <header className="bg-blue-300 py-2 shadow-lg text-center">
      <h1 className="flex justify-center mb-2 text-3xl font-bold">Mood Weather 🌤️ <WeatherSnowflake20 className="w-10 h-10" /></h1>
      <p className="text-xl mt-2">Tu clima diario con una dosis de ánimo</p>
    </header>
  );
}

export default Header;
