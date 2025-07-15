function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Mood Weather <span className="ml-2">🌦️</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
