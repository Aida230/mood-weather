const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src="/logo2.png" className="w-10 " />
            <span>Weather</span>
          </div>
          <div className="text-white">
            <ul className="flex items-center gap-6 text-xl py-4">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
