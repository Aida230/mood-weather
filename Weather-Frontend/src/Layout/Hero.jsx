import SearchForm from "../components/SearchForm";
import WeatherResult from "../components/WeatherResult";
import Header from "./Header";
import Footer from "./Footer";
import VisualDecoration from '../components/VisualDecoration';

function Hero() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <VisualDecoration />
        <WeatherResult>
          {(onResult) => <SearchForm onResult={onResult} />}
        </WeatherResult>
      </div>
        <Footer />
    </>
  );
}

export default Hero;
