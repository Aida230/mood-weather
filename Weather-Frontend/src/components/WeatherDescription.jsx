function WeatherDescription() {
  return (
    <div className="relative w-full max-w-5xl h-[500px] mx-auto rounded-xl overflow-hidden mt-10 shadow-lg">
      {/* Imagen de fondo */}
      <img
        src="/header.jpg"
        alt="Decoración"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Capa oscura encima de la imagen */}
     

      {/* Contenido sobre todo */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-6 space-y-4 animate-fade-in">
        <h2 className="text-4xl font-bold">¿Qué es el clima?</h2>
        <p className="max-w-2xl">
          El clima se refiere a las condiciones atmosféricas como temperatura, humedad, viento y precipitaciones en un lugar específico.
        </p>
        <p className="max-w-2xl leading-relaxed text-sm md:text-base">
          ☀️ <strong>Día soleado:</strong> Cielo claro, ideal para actividades al aire libre.<br />
          ☁️ <strong>Nublado:</strong> Muchas nubes, pero sin lluvia.<br />
          🌧️ <strong>Lluvia:</strong> Lleva paraguas, puede haber precipitaciones.<br />
          ⛈️ <strong>Tormenta:</strong> Relámpagos y truenos, quédate seguro en interiores.<br />
          ❄️ <strong>Nieve:</strong> Temperaturas bajo cero con cristales de hielo.<br />
          🌫️ <strong>Niebla:</strong> Visibilidad baja, maneja con precaución.
        </p>
      </div>
    </div>
  );
}

export default WeatherDescription;
