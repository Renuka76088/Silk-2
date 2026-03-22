import React from 'react';

const OurManagement = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      {/* Transparent Silk Fabric Overlay – Real Touch Feel */}
      <div className="fixed inset-0 pointer-events-none mix-blend-soft-light opacity-[0.04]">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOF9lbGVnYW50X3doaXRlX3NpbGtfZmFicmljX3RleHR1cmVfcG5nX292ZXJsYXlfZWZmZWN0X190cmFuc3BhcmVudF9iYWNrZ3JvdW5kXzRiZGY4YzU4LTg5ZjQtNDBkZi1iZWEwLTI3ZGY4ZjA5YzE5Nl8xLnBuZw.png')`,
            backgroundSize: '400px auto',
          }}
        />
      </div>

      {/* Hero Banner – Cinematic Silk Leadership */}
      <section className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-black/85 to-black"></div>
        
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[-0.05em] text-amber-50 leading-none mb-6">
            THE THREAD<br />OF LEADERSHIP
          </h1>
          <p className="text-2xl md:text-3xl font-light text-amber-200/80 tracking-widest">
            Where heritage meets vision — Pareekh Silk Textile is managed with the same reverence we give to every mulberry thread.
          </p>
        </div>
      </section>

      {/* Management Philosophy – Poetic & Creative Section */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-light text-amber-100 mb-10 tracking-wide">
            We Don’t Just Manage Silk.<br />We Honour It.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            At Pareekh Textile, management is not about numbers — it’s about preserving three decades of legacy while pushing the boundaries of pure mulberry excellence. Every decision, from cocoon sourcing to final drape, is taken with one question: “Will this make the silk prouder?”
          </p>
        </div>
      </section>

      {/* The Visionaries – Creative Staggered Team Cards */}
      <section className="py-16 px-6 md:px-12 bg-black/70">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-light text-amber-100 text-center mb-16">The Hands Behind the Weave</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Founder */}
            <div className="group relative bg-black/60 border border-amber-900/40 rounded-3xl p-8 hover:border-amber-400/60 transition-all duration-700">
              <div className="h-2 w-16 bg-amber-400 mb-8 rounded"></div>
              <h4 className="text-3xl font-light text-amber-50 mb-2">Shri Rajesh Pareek</h4>
              <p className="text-amber-300 mb-6">Founder & Vision Keeper</p>
              <p className="text-gray-300 leading-relaxed">
                The man who turned a family passion into India’s most respected pure silk house. 30+ years of weaving dreams into reality.
              </p>
            </div>

            {/* Creative Director */}
            <div className="group relative bg-black/60 border border-amber-900/40 rounded-3xl p-8 hover:border-amber-400/60 transition-all duration-700 lg:mt-12">
              <div className="h-2 w-16 bg-amber-400 mb-8 rounded"></div>
              <h4 className="text-3xl font-light text-amber-50 mb-2">Mrs. Meera Pareek</h4>
              <p className="text-amber-300 mb-6">Creative Director & Heritage Curator</p>
              <p className="text-gray-300 leading-relaxed">
                The soul who ensures every zari, motif and drape carries the timeless elegance of Banarasi & Kanchipuram traditions.
              </p>
            </div>

            {/* Production Head */}
            <div className="group relative bg-black/60 border border-amber-900/40 rounded-3xl p-8 hover:border-amber-400/60 transition-all duration-700">
              <div className="h-2 w-16 bg-amber-400 mb-8 rounded"></div>
              <h4 className="text-3xl font-light text-amber-50 mb-2">Mr. Arjun Pareek</h4>
              <p className="text-amber-300 mb-6">Head of Production & Quality</p>
              <p className="text-gray-300 leading-relaxed">
                Ensures every meter of silk meets the uncompromising standards that have made Pareekh a name of trust for three decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Silk Process – Creative Flowing Journey */}
      <section className="py-20 px-6 md:px-12 relative">
        <h3 className="text-4xl font-light text-center text-amber-100 mb-16">The Pareekh Process</h3>
        
        <div className="max-w-6xl mx-auto space-y-16 relative before:absolute before:left-1/2 before:top-10 before:bottom-10 before:w-px before:bg-amber-900/50">
          {[
            { step: "01", title: "Cocoon Sourcing", desc: "Only the finest Grade-A mulberry cocoons from trusted farms in Karnataka & Andhra Pradesh — hand-selected for luster and strength." },
            { step: "02", title: "Traditional Reeling", desc: "Artisans reel silk threads using age-old charkha methods — preserving the natural sheen no machine can replicate." },
            { step: "03", title: "Heritage Weaving", desc: "Master weavers on 100+ year old looms create Banarasi, Kanchipuram & Munga masterpieces with real gold zari." },
            { step: "04", title: "Rigorous Quality Ritual", desc: "Every piece is inspected under natural light by three experts — color fastness, drape, and zari alignment are non-negotiable." },
            { step: "05", title: "Ethical Finishing & Packaging", desc: "Hand-folded with love, wrapped in recycled silk paper, and sent with a handwritten note — because luxury should feel personal." }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 text-right md:text-left">
                <span className="text-7xl font-light text-amber-400/30">{item.step}</span>
                <h4 className="text-3xl font-light text-amber-50 mt-2">{item.title}</h4>
              </div>
              <div className="flex-1 text-gray-300 leading-relaxed text-lg">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Promise – Final Creative Close */}
      <section className="py-24 px-6 text-center relative border-t border-amber-900/30">
        <div className="max-w-3xl mx-auto">
          <p className="text-4xl md:text-5xl font-light leading-tight text-amber-100 mb-10">
            At Pareekh Textile,<br />
            Management is not control.<br />
            It is devotion.
          </p>
          <p className="text-amber-200/70 text-lg font-light italic">
            We manage silk the way it deserves — with patience, pride, and an unbroken promise of purity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurManagement;