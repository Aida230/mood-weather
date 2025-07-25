import { useState } from "react";
import Footer from "../Layout/Footer";
import SearchForm from "../components/SearchForm";
import WeatherResult from "../components/WeatherResult";
import WeatherDescription from "../components/WeatherDescription"; // ➕ nuevo
import DecorativeBanner from "../Layout/DecorativeBanner";     // ➕ nuevo


function Home() {
  const [data, setData] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <SearchForm onSearchComplete={setData} />
        {data ? (
          <WeatherResult data={data} />
        ) : (
          <WeatherDescription />
        )}
      </main>
      <Footer />
    </div>
  );
}


export default Home;
