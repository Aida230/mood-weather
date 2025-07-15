const SearchForm = ({ city, setCity, onSubmit }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">Mood Weather 🌤️</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Escribe una ciudad"
          className="p-2 border rounded text-black"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
