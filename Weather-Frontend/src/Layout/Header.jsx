function Header() {
  return (
    <header
      className="h-[200px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/clima-tipos.jpg')" }}
    >
      <div className="text-center bg-black/50 p-6 rounded">
      
        <h1 className="text-4xl font-bold">Mood Weather 🌤️</h1>
        <p className="text-xl mt-2">Tu clima diario con una dosis de ánimo</p>
      </div>
    </header>
  );
}

export default Header;
