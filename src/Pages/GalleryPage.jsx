import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Leaf, Award, Sparkles, MapPin } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const silkMedia = [
    { 
      id: 1, 
      type: 'image', 
      category: 'Pure Silk', 
      title: 'Vibrant Mulberry Silk Loom', 
      desc: 'Handwoven pure mulberry silk with traditional motifs from Surat.',
      url: 'https://img.freepik.com/free-psd/elegant-red-silk-fabric-drape-luxurious-3d-render_632498-24374.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' 
    },
    { 
      id: 2, 
      type: 'image', 
      category: 'Banarasi', 
      title: 'Kashi Brocade Silk Saree', 
      desc: 'Intricate gold zari work on deep red Banarasi silk.',
      url: 'https://img.freepik.com/free-photo/close-up-velvet-texture_23-2149305923.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' 
    },
    { 
      id: 3, 
      type: 'image', 
      category: 'Raw Silk', 
      title: 'Textured Tussar Raw Silk', 
      desc: 'Natural gold hue Tussar silk with a rustic, sophisticated texture.',
      url: 'https://img.freepik.com/free-photo/smooth-elegant-golden-fabric-material-texture_23-2148402299.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' 
    },
    { 
      id: 4, 
      type: 'image', 
      category: 'Pure Silk', 
      title: 'Soft Pastel Crepe Silk', 
      desc: 'Flowy crepe silk drape with a gentle sheen for modern couture.',
      url: 'https://img.freepik.com/free-photo/full-frame-view-smooth-textiles_23-2147874950.jpg?t=st=1774098378~exp=1774101978~hmac=360d86327d256d199c7811694277e14e264dae65ac32e6a4ffaec64aa92c70d6&w=1060' 
    },
    { 
      id: 5, 
      type: 'image', 
      category: 'Banarasi', 
      title: 'Antique Silver Zari Weave', 
      desc: 'Elegant silver zari work on royal blue Banarasi silk.',
      url: 'https://img.freepik.com/premium-photo/indian-saris_163782-8632.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' 
    },
    { 
      id: 6, 
      type: 'image', 
      category: 'Artisans', 
      title: 'Master Weaver at Work', 
      desc: 'The dedication behind every inch of Pareekh Silk.',
      url: 'https://img.freepik.com/free-photo/fabric-waves-dance-pastel-colors-mimicking-gentle-flow-serene-sea_91128-4509.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80' 
    },
  ];

  const categories = ['All', 'Pure Silk', 'Banarasi', 'Raw Silk', 'Artisans'];

  const filteredMedia = filter === 'All' ? silkMedia : silkMedia.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* Subtle Silk Glow Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[100%] h-[100%] bg-amber-950/10 blur-[120px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* Header Section with Silk Inspiration */}
        <header className="mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-amber-500"
          >
            <Sparkles size={16} />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold">The Silk Collective</span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-8xl font-serif tracking-tighter leading-none"
            >
              Pareekh <span className="italic text-zinc-500 font-light underline decoration-zinc-800 underline-offset-8">Silk.</span>
            </motion.h1>

            {/* Category Filter - Premium Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all duration-500 border ${
                    filter === cat ? 'bg-amber-600 border-amber-600 text-black shadow-[0_10px_30px_rgba(217,119,6,0.3)]' : 'border-zinc-800 text-zinc-500 hover:border-amber-500/50 hover:text-amber-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Gallery Grid - Masonry/Silk Tiles */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence>
            {filteredMedia.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(item)}
                className="break-inside-avoid relative overflow-hidden rounded-[2.5rem] bg-zinc-900 cursor-pointer group shadow-2xl shadow-black/30 border border-white/5"
              >
                {/* Image Component */}
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                />

                {/* Silk Gold Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Content on Hover - Sliding Up */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-[1px] w-8 bg-amber-500 group-hover:w-12 transition-all"></span>
                    <p className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">{item.category}</p>
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-4 leading-tight group-hover:text-amber-200 transition-colors">{item.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed max-w-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">{item.desc}</p>
                  
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-black transition-all">
                    <Maximize2 size={18} />
                  </div>
                </div>

                {/* Silk Sheen Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 origin-left ease-in-out"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal - Glassmorphism */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-16 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-10 right-10 text-white hover:text-amber-500 transition-colors"
              >
                <X size={40} strokeWidth={1} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                className="relative max-w-6xl w-full aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking image
              >
                <img src={selectedImage.url} alt="Large View" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{selectedImage.category}</p>
                  <h2 className="text-4xl font-serif text-white mb-3">{selectedImage.title}</h2>
                  <p className="text-zinc-400 text-sm max-w-xl">{selectedImage.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Footer - Heritage & Quality */}
        <footer className="mt-32 pt-10 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-10 text-zinc-700 text-[10px] tracking-[0.4em] uppercase font-bold">
          <div className="flex items-center gap-4 group hover:text-amber-500 transition-colors">
            <Leaf size={20} className="text-amber-900 group-hover:text-amber-500" />
            <span>Pure mulberry silk</span>
          </div>
          <div className="flex items-center gap-4 group hover:text-amber-500 transition-colors">
            <Award size={20} className="text-amber-900 group-hover:text-amber-500" />
            <span>Legacy of Weaving</span>
          </div>
          <div className="flex items-center gap-4 group hover:text-amber-500 transition-colors">
            <MapPin size={20} className="text-amber-900 group-hover:text-amber-500" />
            <span>Heriage Surat Hub</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GalleryPage;