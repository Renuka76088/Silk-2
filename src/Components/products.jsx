import React from 'react';

const products = [
  {
    id: 1,
    name: 'Banarasi Silk Saree - Emerald Green',
    description: 'Intricate gold zari weaving with rich motifs, pure mulberry silk.',
    price: '₹18,999',
    image: 'https://thumbs.dreamstime.com/b/elegant-emerald-green-banarasi-silk-saree-intricate-gold-zari-weaving-luxurious-emerald-green-banarasi-silk-saree-featuring-413220498.jpg',
  },
  {
    id: 2,
    name: 'Pure Mulberry Silk Fabric - Champagne Beige',
    description: 'Soft, lustrous 19mm satin weave, perfect for custom tailoring.',
    price: '₹2,499 / meter',
    image: 'https://m.media-amazon.com/images/I/611E40gp5yL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg',
  },
  {
    id: 3,
    name: 'Luxury Silk Saree - Teal & Orange with Gold',
    description: 'Handwoven with golden embellishments, flowing drape.',
    price: '₹22,499',
    image: 'https://thumbs.dreamstime.com/b/luxurious-teal-orange-saree-golden-embellishments-close-up-shot-richly-detailed-adorned-intricate-fabric-378817052.jpg',
  },
  {
    id: 4,
    name: 'Munga Silk Dupatta - Embroidered Floral',
    description: 'Lightweight, breathable silk with intricate embroidery.',
    price: '₹4,999',
    image: 'http://www.heritageweave.com/cdn/shop/articles/How_to_Style_a_Munga_Silk_Dupatta_for_Every_Occasion_2048x2048_cbd59151-476a-4dd4-a845-b2495188fd68.webp?v=1734510257',
  },
  {
    id: 5,
    name: 'Rich Maroon Satin Silk Fabric',
    description: 'Deep color, premium sheen for dresses or home decor.',
    price: '₹1,899 / meter',
    image: 'https://m.media-amazon.com/images/I/41jZfH-AqbL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg',
  },
  {
    id: 6,
    name: 'Golden Hour Silk Saree',
    description: 'Warm golden tones, abstract luxury drape.',
    price: '₹25,999',
    image: 'https://thumbs.dreamstime.com/b/golden-hour-abstract-silk-texture-close-up-fabric-soft-folds-shimmery-luxury-elegance-warmth-365355095.jpg',
  },
  // Add more as per your collection
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white pt-24">
      {/* Hero Banner for Products */}
{/* Nayi main heading yahan daal rahe hain – premium silk collection feel ke liye */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-widest text-amber-100 mb-6">
          Eternal Elegance in Pure Silk
        </h1>
        <p className="text-xl md:text-2xl text-amber-200/80 max-w-3xl mx-auto font-light tracking-wide">
          Handwoven luxury • Timeless weaves • Pure mulberry indulgence
        </p>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative rounded-2xl overflow-hidden bg-black/60 border border-amber-900/30 hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/30 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-amber-100 mb-2 group-hover:text-amber-200 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-amber-300">
                    {product.price}
                  </span>
                  <button className="px-6 py-2 bg-amber-200/20 border border-amber-200 text-amber-200 text-sm uppercase tracking-wider hover:bg-amber-200 hover:text-black transition-all duration-500">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section - Creative silk feel */}
      <section className="py-20 px-6 bg-black/50">
        <h2 className="text-4xl md:text-5xl font-light text-center tracking-wide text-amber-100 mb-16">
          Explore by Category
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { title: 'Silk Sarees', desc: 'Timeless handwoven masterpieces with zari & motifs.', img: 'https://thumbs.dreamstime.com/b/cream-silk-saree-red-border-gold-embroidery-white-background-fabric-rolled-unfolded-soft-folds-elegant-traditional-411679714.jpg' },
            { title: 'Dupattas & Stoles', desc: 'Light, elegant silk accents for every outfit.', img: 'https://vashah.pk/cdn/shop/articles/Elegance_of_Silk_Dupattas.png?crop=center&height=1200&v=1727164504&width=1200' },
            { title: 'Pure Silk Fabrics', desc: 'Premium mulberry silk by the meter for custom creations.', img: 'https://i.etsystatic.com/31773036/r/il/6f73c5/7382868834/il_fullxfull.7382868834_2m42.jpg' },
          ].map((cat, idx) => (
            <div 
              key={idx}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
              <img src={cat.img} alt={cat.title} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-light text-amber-100 mb-2 group-hover:text-amber-200 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-wider text-amber-100 mb-8">
          Feel the Pure Silk Difference
        </h2>
        <button className="group relative px-16 py-6 border-2 border-amber-200 text-amber-200 text-lg uppercase tracking-widest overflow-hidden transition-all duration-700 hover:text-black hover:bg-amber-200">
          <span className="relative z-10">Enquire Now</span>
          <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
        </button>
      </section>
    </div>
  );
};

export default Products;