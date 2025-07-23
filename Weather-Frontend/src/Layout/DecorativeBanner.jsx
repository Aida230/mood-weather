function DecorativeBanner() {
  return (
    <div className="hidden md:block fixed top-40 right-6 z-10 w-100 h-[500px] overflow-hidden rounded-xl shadow-lg">
      <div className="animate-banner-scroll space-y-4">
        <img src="/Banner.jpg" className="w-full rounded shadow h-60" alt="Decorativo 1" />
        <img src="/bg-arboles.jpg" className="w-full rounded shadow h-60" alt="Decorativo 2" />
        <img src="/Banner3.jpg" className="w-full rounded shadow h-60" alt="Decorativo 3" />
        <img src="/Banner.jpg" className="w-full rounded shadow h-60" alt="Decorativo 1 copia" />
        <img src="/bg-arboles.jpg" className="w-full rounded shadow h-60" alt="Decorativo 2 copia" />
        <img src="/Banner3.jpg" className="w-full rounded shadow h-60" alt="Decorativo 3 copia" />
      </div>
    </div>
  );
}

export default DecorativeBanner;
