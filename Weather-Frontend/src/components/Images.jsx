const Images = () => {
  const items = [
    { src: "/bg.jpg", text: "Electricidad viva" },
    { src: "/lluvia.jpg", text: "Sombras y reflejos" },
    { src: "/atardecer.avif", text: "Atardecer en calma" },
  ];

  return (
    <div className="bg-black text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-xl backdrop-blur-sm py-8 px-3"
            >
              <img
                src={item.src}
                alt={item.text}
                className="rounded-xl shadow-lg object-cover w-full max-w-[350px] h-[200px] transition-transform duration-300 hover:scale-105"
                style={{
                  maskImage: "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                }}
              />
              <p className="mt-4 text-center text-xl">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
