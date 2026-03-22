import React from 'react'

function WhyChooseUs() {
  return (
   <>
   
   {/* Why Choose Us Section - Premium Silk Feel */}
<section className="py-20 px-6 bg-black/50 border-t border-amber-900/30">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-light tracking-widest text-amber-100 mb-6">
      Why Drape Yourself in Our Silk?
    </h2>
    <p className="text-xl text-amber-200/70 max-w-3xl mx-auto mb-16 font-light">
      Where heritage meets luxury — every thread tells a story of timeless craftsmanship and pure indulgence.
    </p>

    <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
      {/* Card 1 */}
      <div className="group relative bg-black/60 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20">
        <div className="text-5xl text-amber-400/70 mb-6 group-hover:text-amber-300 transition-colors">
          ✦
        </div>
        <h3 className="text-2xl font-light text-amber-100 mb-4">
          100% Pure Mulberry Silk
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Only the finest grade silk — soft, lustrous, breathable, and eternally elegant. No blends, no compromises.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group relative bg-black/60 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20">
        <div className="text-5xl text-amber-400/70 mb-6 group-hover:text-amber-300 transition-colors">
          ⚜
        </div>
        <h3 className="text-2xl font-light text-amber-100 mb-4">
          Handwoven by Master Artisans
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Generations of skill in Banarasi, Kanchipuram & Bengal traditions — each saree carries soul and heritage.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group relative bg-black/60 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20">
        <div className="text-5xl text-amber-400/70 mb-6 group-hover:text-amber-300 transition-colors">
          ∞
        </div>
        <h3 className="text-2xl font-light text-amber-100 mb-4">
          Heirloom Quality & Longevity
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Designed to be cherished across generations — rich zari, vibrant colors that never fade, drape that flows forever.
        </p>
      </div>

      {/* Extra Card 4 (optional – agar 4 chahiye to uncomment kar dena) */}
      {/* <div className="group relative bg-black/60 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20 md:col-span-2 lg:col-span-1">
        <div className="text-5xl text-amber-400/70 mb-6 group-hover:text-amber-300 transition-colors">
          ♛
        </div>
        <h3 className="text-2xl font-light text-amber-100 mb-4">
          Ethical & Sustainable Luxury
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Supporting artisan communities, eco-conscious weaving — luxury that feels good inside and out.
        </p>
      </div> */}
    </div>
  </div>
</section>
   
   </>
  )
}

export default WhyChooseUs