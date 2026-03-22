import React from 'react';

const products = [
  {
    id: 1,
    name: 'Banarasi Silk Saree - Emerald Green',
    description: 'Gold zari whispers across pure mulberry — a drape that remembers every fold.',
    price: '₹18,999',
    image: 'https://thumbs.dreamstime.com/b/elegant-emerald-green-banarasi-silk-saree-intricate-gold-zari-weaving-luxurious-emerald-green-banarasi-silk-saree-featuring-413220498.jpg',
  },
  {
    id: 2,
    name: 'Pure Mulberry Silk Fabric - Champagne Beige',
    description: '19mm satin sheen that melts on skin — yard after yard of quiet indulgence.',
    price: '₹2,499 / meter',
    image: 'https://m.media-amazon.com/images/I/611E40gp5yL.jpg',
  },
  {
    id: 3,
    name: 'Luxury Silk Saree - Teal & Orange with Gold',
    description: 'Contrasting borders that catch light like dawn on a river — timeless rebellion.',
    price: '₹22,499',
    image: 'https://thumbs.dreamstime.com/b/luxurious-teal-orange-saree-golden-embellishments-close-up-shot-richly-detailed-adorned-intricate-fabric-378817052.jpg',
  },
  {
    id: 4,
    name: 'Munga Silk Dupatta - Embroidered Floral',
    description: 'Light as a sigh, embroidered petals that bloom with every movement.',
    price: '₹4,999',
    image: 'http://www.heritageweave.com/cdn/shop/articles/How_to_Style_a_Munga_Silk_Dupatta_for_Every_Occasion_2048x2048_cbd59151-476a-4dd4-a845-b2495188fd68.webp?v=1734510257',
  },
  {
    id: 5,
    name: 'Rich Maroon Satin Silk Fabric',
    description: 'Deep crimson depth with a mirror-like sheen — for dresses that command silence.',
    price: '₹1,899 / meter',
    image: 'https://m.media-amazon.com/images/I/41jZfH-AqbL.jpg',
  },
  {
    id: 6,
    name: 'Golden Hour Silk Saree',
    description: 'Warm abstract luxury — folds that glow like sunset caught in thread.',
    price: '₹25,999',
    image: 'https://thumbs.dreamstime.com/b/golden-hour-abstract-silk-texture-close-up-fabric-soft-folds-shimmery-luxury-elegance-warmth-365355095.jpg',
  },
  // Add more silk products as needed
];

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      {/* Subtle transparent silk fabric overlay – real tactile premium feel */}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-[0.05]">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOF9lbGVnYW50X3doaXRlX3NpbGtfZmFicmljX3RleHR1cmVfcG5nX292ZXJsYXlfZWZmZWN0X190cmFuc3BhcmVudF9iYWNrZ3JvdW5kXzRiZGY4YzU4LTg5ZjQtNDBkZi1iZWEwLTI3ZGY4ZjA5YzE5Nl8xLnBuZw.png')`,
            backgroundSize: '400px auto',
          }}
        />
      </div>

      {/* Hero Showcase – Immersive silk introduction */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center px-6 md:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 via-black/70 to-black"></div>
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[-0.05em] text-amber-50 leading-none mb-6">
            Pure Threads
          </h1>
          <p className="text-2xl md:text-4xl font-light text-amber-200/80 tracking-wider uppercase mb-8">
            Silk That Remembers
          </p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Every fold, every shimmer — mulberry legacy handwoven for skin that knows luxury.
          </p>
        </div>
      </section>

      {/* Products Section – Asymmetric, creative masonry layout */}
      <section className="py-16 md:py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`group break-inside-avoid relative rounded-3xl overflow-hidden border border-amber-900/20 shadow-2xl shadow-black/50 hover:shadow-amber-900/40 transition-all duration-700 hover:-translate-y-6 ${index % 2 === 1 ? 'md:mt-16 lg:mt-24' : ''}`}
            >
              {/* Image with silk sheen hover */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-[0.5deg]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-amber-900/10 opacity-70 group-hover:opacity-40 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.08)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Content – Poetic & minimal */}
              <div className="p-8 relative">
                <h3 className="text-2xl md:text-3xl font-light text-amber-50 mb-3 group-hover:text-amber-200 transition-colors leading-tight">
                  {product.name}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-medium text-amber-300">
                    {product.price}
                  </span>
                  <button className="px-6 py-3 bg-amber-200/10 border border-amber-200/30 text-amber-200 text-sm uppercase tracking-wider hover:bg-amber-200 hover:text-black transition-all duration-500 rounded-full">
                    Explore Drape
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer – Elegant close */}
      <section className="py-16 md:py-24 px-6 text-center relative">
        <h2 className="text-4xl md:text-6xl font-light text-amber-100 mb-8 tracking-wider">
          Feel the Thread
        </h2>
        <button className="group relative px-16 py-6 border-2 border-amber-200/50 text-amber-200 text-lg uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-700 rounded-full">
          <span className="relative z-10">Enquire Now</span>
          <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
        </button>
      </section>
    </div>
  );
};

export default ProductPage;