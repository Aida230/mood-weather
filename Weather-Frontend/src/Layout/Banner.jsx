const Banner = () => {
  return (
    <div
      id="banner"
      className="bg-black text-white py-16 px-6 sm:px-12 space-y-24"
    >
      {/* Sección 1: Imagen izquierda, texto derecha */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagen izquierda */}
        <div className="flex justify-center">
          <img
            src="./meteo2.jpg"
            alt="Satélite"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Texto derecha */}
        <div className="relative p-6 sm:p-10 border-r border-b border-blue-400">
          <p className="uppercase text-blue-400 text-sm mb-2">
            NUESTRA TECNOLOGÍA
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Herramientas de Seguimiento Meteorológico de Precisión
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            Mediante sensores de radar, infrarrojos y microondas de última
            generación, ofrecemos mapas meteorológicos y pronósticos de alta
            resolución para ayudar a las comunidades a prepararse frente a
            cambios bruscos del clima y eventos extremos.
          </p>
          <a
            href="https://cdsentec.com/es/weather-measuring-instruments-essential-tools/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm"
          >
            View All
          </a>
        </div>
      </div>

      {/* Sección 2: Texto izquierda, imagen derecha */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texto izquierda */}
        <div className="relative p-6 sm:p-10 border-r border-b border-blue-400 order-2 md:order-1">
          <p className="uppercase text-blue-400 text-sm mb-2">NUESTRA MISIÓN</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Monitoreando el Clima de la Tierra desde el Espacio
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            Nuestros sistemas satelitales avanzados escanean continuamente la
            atmósfera terrestre para recopilar datos en tiempo real sobre
            temperatura, formaciones nubosas y actividad de tormentas. Esto nos
            permite mejorar la precisión de las predicciones y comprender mejor
            el cambio climático.
          </p>
          <a
            href="https://www.thalesgroup.com/es/group/magazine/monitorizacion-tierra-del-impacto-del-cambio-climatico-desde-el-espacio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm"
          >
            Explore
          </a>
        </div>

        {/* Imagen derecha */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="./meteo3.jpg"
            alt="Otra misión"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
