import SearchForm from "../components/SearchForm";
import WeatherResult from "../components/WeatherResult";
import Header from "./Header";
import Footer from "./Footer";

function Hero() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-sky-900 to-blue-800 text-white">
        <Header />
        <WeatherResult>
          {(onResult) => <SearchForm onResult={onResult} />}
        </WeatherResult>
      </div>
        <Footer />
    </>
  );
}

export default Hero;
