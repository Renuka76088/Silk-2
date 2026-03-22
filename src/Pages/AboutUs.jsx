import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Global silk-like subtle noise/grain for tactile modern luxury feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-soft-light">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] bg-repeat"></div>
      </div>

      {/* Hero - Bold, cinematic opening with gradient silk flow */}
      <section className="relative h-screen flex items-center justify-center px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-black to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[-0.05em] text-amber-50 leading-none animate-fade-in">
            PAREEKH
          </h1>
          <p className="mt-6 text-3xl md:text-5xl font-light text-amber-200/70 tracking-widest uppercase">
            Silk. Reimagined.
          </p>
          <div className="mt-12 w-24 h-0.5 bg-amber-400/50 mx-auto animate-expand"></div>
          <p className="mt-10 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Not just fabric. A quiet rebellion against the ordinary.  
            Pure mulberry threads that refuse to whisper — they resonate.
          </p>
        </div>
      </section>

      {/* The Origin - Asymmetric modern layout */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-10">
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-amber-100">
              About Parekh Silk
              Woven for the World.
            </h2>
            <p className="text-xl leading-relaxed text-gray-300">
              Three decades ago, in the pulse of Madhya Pradesh, Pareekh began not as a business, but as an obsession with what silk could truly become. We didn't follow looms — we questioned them. Why blend when purity sings louder? Why mass-produce when mastery lingers?
            </p>
            <p className="text-xl leading-relaxed text-gray-300">
              Today, we source the rarest mulberry cocoons, collaborate with weavers who still tie knots by memory, and finish each piece like it's destined for eternity — because it is.
            </p>
          </div>

          {/* Visual: Modern silk close-up with overlay text reveal */}
          <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden border border-amber-900/20 shadow-2xl shadow-amber-950/30 group">
            <img
              src="https://img.freepik.com/free-photo/peach-silk-fabric-texture_23-2151943858.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" // Modern luxury silk texture/fold close-up
              alt="Abstract flowing silk texture in golden light"
              className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 text-amber-100 text-2xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              Feel the thread. Forget the trend.
            </div>
          </div>
        </div>
      </section>

      {/* Values - Flowing, non-card modern blocks */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto space-y-32">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-light text-amber-50 mb-6">
              What Threads Us Together
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h3 className="text-4xl font-light text-amber-200">Uncompromised Purity</h3>
              <p className="text-lg text-gray-300">100% mulberry. Zero compromise. We don't dilute heritage for convenience.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-light text-amber-200">Weaver-First</h3>
              <p className="text-lg text-gray-300">Every artisan is partner, not labor. Their hands shape our legacy — we protect it fiercely.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-light text-amber-200">Eternal Drape</h3>
              <p className="text-lg text-gray-300">Colors that defy time. Folds that remember your form. Silk made to outlive trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Invitation - Bold CTA with modern edge */}
      <section className="py-32 px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-extralight text-amber-50 mb-12 tracking-[-0.03em]">
            Ready to Drape  
            Something Real?
          </h2>
          <button className="group relative px-16 py-8 text-2xl uppercase tracking-widest border-2 border-amber-200/50 text-amber-100 overflow-hidden hover:text-black transition-colors duration-700">
            <span className="relative z-10">Enter the Weave</span>
            <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;