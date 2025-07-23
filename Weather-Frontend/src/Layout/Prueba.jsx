//Prueba usando el SearchForm dentro de la imagen de la tormenta

import WeatherResult from "../components/WeatherResult";
import SearchForm from "../components/SearchForm";
import { useState } from "react";

const TextVideo = () => {
   const [data, setData] = useState(null);
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold">El clima</h1>
            <p>
              Es el estado habitual del cielo y el aire que nos rodea:
              temperatura, lluvia, viento y sol. Pero también es el ánimo del
              mundo, el suspiro del día, el lenguaje sutil con que la naturaleza
              nos habla.
            </p>
            <SearchForm onSearchComplete={setData} />
{data && <WeatherResult data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextVideo;
