const TextVideo = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">El clima</h1>
            <p>
              Es el estado habitual del cielo y el aire que nos rodea:
              temperatura, lluvia, viento y sol. Pero también es el ánimo del
              mundo, el suspiro del día, el lenguaje sutil con que la naturaleza
              nos habla.
            </p>
            <button className="bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-md duration-200 cursor-pointer">Saber mas</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextVideo;
