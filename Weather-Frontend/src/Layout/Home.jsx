import { useState } from "react";
import SearchForm from "../components/SearchForm";
import WeatherResult from "../components/WeatherResult";
import IconsCard from "../components/IconsCard"


function Home() {
  const [data, setData] = useState(null);

  return (
    <div className="bg-black text-white flex flex-col">
      <main>
        <SearchForm onSearchComplete={setData} />
        {data ? (
          <WeatherResult data={data} />
        ) : (
          <IconsCard />
        )}
      </main>
    </div>
  );
}


export default Home;
