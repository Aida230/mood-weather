import { Zap, CloudRain, Sunset } from "lucide-react";

const IconsCard = () => {
  const items = [
    {
      icon: <Zap size={48} />,
      title: "Energía Viva",
      description: "Transmitimos potencia con cada diseño.",
    },
    {
      icon: <CloudRain size={48} />,
      title: "Naturaleza en Movimiento",
      description: "Capturamos la esencia del cambio.",
    },
    {
      icon: <Sunset size={48} />,
      title: "Calma Visual",
      description: "Colores suaves para armonía visual.",
    },
  ];

  return (
    <div className="relative bg-black text-white py-12 overflow-hidden">
      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 max-w-[350px] h-[200px] mx-auto"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GIF DE FONDO */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <img
          src="/Gif3.gif"
          alt="Decoración animada"
          className="w-full h-full object-cover mix-blend-screen opacity-60 translate-y-20"
        />
      </div>
    </div>
  );
};

export default IconsCard;
