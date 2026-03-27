import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      {/* Hero Section - Full width silk background */}
     

      {/* Introduction Section */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-amber-100">
              PAREKH Textile of Silk
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Established with a passion for pure craftsmanship, PAREKH Textile has been weaving dreams into reality for over three decades. Rooted in the heart of India's rich silk heritage, we blend age-old techniques with modern elegance to create fabrics that whisper luxury.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Every thread tells a story — of dedicated artisans, meticulous handloom weaving, and an unwavering commitment to quality. Our silk isn't just fabric; it's an emotion, a legacy passed down through generations.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-900/30 transform hover:scale-105 transition-transform duration-700">
            <img 
              src="https://gaatha.org/wp-content/uploads/Signifiance-tribhuvanam-saree.jpg.webp" 
              alt="Artisan weaving silk saree on traditional loom" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <p className="absolute bottom-6 left-6 text-sm uppercase tracking-widest text-amber-200">
              Handwoven with love
            </p>
          </div>
        </div>
      </section>



  
    </div>
  );
};

export default AboutUs;