import React, { useState } from 'react';

const ProductGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Banarasi Silk',
    'Pure Mulberry',
    'Kanchipuram Silk',
    'Organza Silk',
    'Munga Silk',
    'Satin Silk'
  ];

  const products = [
    { id: 1, name: 'Emerald Banarasi Zari Saree', category: 'Banarasi Silk', price: '₹18,999', image: 'https://thumbs.dreamstime.com/b/elegant-emerald-green-banarasi-silk-saree-intricate-gold-zari-weaving-luxurious-emerald-green-banarasi-silk-saree-featuring-413220498.jpg' },
    { id: 2, name: 'Champagne Mulberry Satin Fabric', category: 'Pure Mulberry', price: '₹2,499/m', image: 'https://m.media-amazon.com/images/I/611E40gp5yL.jpg' },
    { id: 3, name: 'Teal Kanchipuram Gold Border', category: 'Kanchipuram Silk', price: '₹22,499', image: 'https://thumbs.dreamstime.com/b/luxurious-teal-orange-saree-golden-embellishments-close-up-shot-richly-detailed-adorned-intricate-fabric-378817052.jpg' },
    { id: 4, name: 'Ivory Organza Embroidered Dupatta', category: 'Organza Silk', price: '₹5,499', image: 'https://vashah.pk/cdn/shop/articles/Elegance_of_Silk_Dupattas.png?crop=center&height=1200&v=1727164504&width=1200' },
    { id: 5, name: 'Munga Silk Floral Stole', category: 'Munga Silk', price: '₹4,999', image: 'http://www.heritageweave.com/cdn/shop/articles/How_to_Style_a_Munga_Silk_Dupatta_for_Every_Occasion_2048x2048_cbd59151-476a-4dd4-a845-b2495188fd68.webp?v=1734510257' },
    { id: 6, name: 'Maroon Satin Silk Meter', category: 'Satin Silk', price: '₹1,899/m', image: 'https://m.media-amazon.com/images/I/41jZfH-AqbL.jpg' },
    { id: 7, name: 'Royal Blue Banarasi Brocade', category: 'Banarasi Silk', price: '₹21,999', image: 'https://img.freepik.com/premium-photo/blue-cloth-texture-background_44073-1577.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' },
    { id: 8, name: 'Pearl White Mulberry Chiffon', category: 'Pure Mulberry', price: '₹3,299/m', image: 'https://i.etsystatic.com/31773036/r/il/6f73c5/7382868834/il_fullxfull.7382868834_2m42.jpg' },
    { id: 8, name: 'Pearl Mulberry Chiffon', category: 'Pure Mulberry', price: '₹3,299/m', image: 'https://img.freepik.com/free-photo/peach-silk-fabric-texture_23-2151943858.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' },
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      {/* Transparent Silk Texture Overlay – Real Fabric Touch */}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-[0.04]">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOF9lbGVnYW50X3doaXRlX3NpbGtfZmFicmljX3RleHR1cmVfcG5nX292ZXJsYXlfZWZmZWN0X190cmFuc3BhcmVudF9iYWNrZ3JvdW5kXzRiZGY4YzU4LTg5ZjQtNDBkZi1iZWEwLTI3ZGY4ZjA5YzE5Nl8xLnBuZw.png')`,
            backgroundSize: '380px auto',
          }}
        />
      </div>

      {/* 40vh Banner – Cinematic & Unique */}
      <section className="relative h-[40vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-black/90 to-black"></div>
        
        {/* Subtle moving silk sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.12)_0%,transparent_70%)] animate-slow-pulse"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-[-0.06em] text-amber-50 mb-4">
            THE SILK ARCHIVES
          </h1>
          <p className="text-xl md:text-2xl font-light text-amber-200/80 tracking-[0.3em] uppercase">
            Every thread, every story, every shimmer
          </p>
        </div>
      </section>

      {/* Creative Category Ribbon – Horizontal Scroll with Silk Feel */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-amber-900/50 py-5">
        <div className="max-w-7xl mx-auto px-6 flex gap-4 overflow-x-auto scrollbar-hide pb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 whitespace-nowrap rounded-full text-sm uppercase tracking-widest transition-all duration-500 border ${
                activeCategory === cat 
                  ? 'bg-amber-200 text-black border-amber-200 font-medium shadow-lg shadow-amber-900/30' 
                  : 'border-amber-900/60 hover:border-amber-400/70 text-amber-200 hover:text-amber-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Unique Masonry Gallery – Asymmetric & Artistic */}
      <section className="py-16 md:py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`group relative rounded-3xl overflow-hidden border border-amber-900/30 shadow-2xl hover:shadow-amber-900/40 transition-all duration-700 break-inside-avoid hover:-translate-y-4 ${index % 3 === 1 ? 'md:mt-20' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-[1deg]"
                />
                {/* Silk Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,158,11,0.15)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-7 relative">
                <div className="text-xs uppercase tracking-widest text-amber-400 mb-2 font-light">
                  {product.category}
                </div>
                <h3 className="text-2xl font-light text-amber-50 group-hover:text-amber-200 transition-colors leading-tight mb-3">
                  {product.name}
                </h3>
                <p className="text-xl text-amber-300 font-medium mb-5">
                  {product.price}
                </p>
                <button className="text-amber-200 text-sm uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all">
                  View Drape 
                  <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Elegant CTA */}
      <section className="py-20 text-center">
        <p className="text-amber-200/70 text-lg font-light italic max-w-md mx-auto">
          Not just silk. A legacy you can wear.
        </p>
      </section>
    </div>
  );
};

export default ProductGallery;