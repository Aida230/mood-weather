import Home from "./Layout/Home";
import Navbar from "./Layout/Navbar";
import TextVideo from "./components/TextVideo";
import Banner from "./Layout/Banner";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div>
      <div className="relative h-[700px] w-full overflow-hidden">
        <video
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/tormenta.mp4" type="video/mp4" />
        </video>
        <Navbar />
        <TextVideo />
      </div>
      <Home/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
