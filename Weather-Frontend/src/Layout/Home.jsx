import { useState } from "react";
import SearchForm from "../components/SearchForm";
import WeatherResult from "../components/WeatherResult";
import IconsCard from "../components/IconsCard";

function Home() {
  const [data, setData] = useState(null);

  const handleReset = () => {
    setData(null);

    // Scroll al input después de un pequeño delay
    setTimeout(() => {
      const input = document.getElementById("city-input");
      if (input) {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
        input.focus(); // opcional
      }
    }, 100); // delay breve para asegurar que el input está montado
  };

  return (
    <div className="bg-black text-white flex flex-col">
      <main>
        <SearchForm onSearchComplete={setData} resetTrigger={data === null} />
        {data ? (
          <WeatherResult data={data} onReset={handleReset} />
        ) : (
          <IconsCard />
        )}
      </main>
    </div>
  );
}

export default Home;
