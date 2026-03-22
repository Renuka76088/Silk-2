import React, { useState, useEffect } from 'react';

const PareekhSilkBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bg: 'https://img.freepik.com/free-photo/peach-silk-fabric-texture_23-2151943858.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80',
      overlay: 'from-purple-950/70 via-purple-800/50 to-black/70',
      textColor: 'text-white',
      accent: 'text-amber-200'
    },
    {
      bg: 'https://img.freepik.com/free-vector/swirl-fabric-silk-backdrop-luxurious-vinous-drapery-folded-textile-with-soft-spiral-vortex-satin-waves_33099-1542.jpg?t=st=1774088535~exp=1774092135~hmac=882d3ad4de26ad0f9183897293cbdbc46df5d0b41797d7e72a76e44972b41b6c&w=1060',
      overlay: 'from-red-950/70 via-red-900/50 to-black/70',
      textColor: 'text-white',
      accent: 'text-amber-300'
    },
    {
      bg: 'https://img.freepik.com/premium-photo/blue-cloth-texture-background_44073-1577.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80',
      overlay: 'from-pink-900/60 via-purple-800/50 to-blue-950/70',
      textColor: 'text-gray-100',
      accent: 'text-rose-200'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // thoda slow for luxury feel

    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden pt-20 lg:pt-28"
      style={{ backgroundImage: `url('${current.bg}')` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${current.overlay}`}></div>

      <div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto transition-opacity duration-1000 opacity-100"
      >
        <h1 
          className={`text-6xl md:text-8xl lg:text-[10rem] leading-none font-extralight tracking-[0.6em] ${current.textColor} mb-4`}
          style={{ fontFamily: 'Georgia, serif' }}
        >
          PAREEKH
        </h1>
        
        <p className={`text-3xl md:text-5xl lg:text-6xl font-light tracking-widest ${current.accent} mb-8`}>
          TEXTILE OF SILK
        </p>

        <div className={`w-40 lg:w-56 h-px bg-gradient-to-r from-transparent via-${current.accent.split('-')[1]}-300 to-transparent mx-auto mb-10`}></div>

        <p className={`max-w-xl mx-auto text-lg md:text-2xl font-light leading-relaxed ${current.textColor}/90 mb-12`}>
          Timeless elegance woven in every thread.<br className="hidden md:block" />
          Experience the pure flow of luxury silk.
        </p>

        <button 
          className={`group relative px-12 py-5 border-2 border-white ${current.textColor} text-sm md:text-base font-medium tracking-widest uppercase overflow-hidden transition-all duration-700 hover:text-black hover:border-amber-200`}
        >
          <span className="relative z-10">Discover the Collection</span>
          <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
        </button>
      </div>

      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              idx === currentSlide ? 'bg-white scale-150 shadow-lg' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PareekhSilkBanner;