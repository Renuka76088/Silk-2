import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, Briefcase, Target, ExternalLink } from 'lucide-react';
import { footer } from 'framer-motion/client';

const Associates = () => {
  // Points of Interest based on image_0.png
  const points = [
    { id: 1, name: "Parekh Fabrics", x: 20, y: 48, top: '48%', left: '20%' },
    { id: 2, name: "Parekh Silk", x: 24, y: 56, top: '56%', left: '24%' },
    { id: 3, name: "Parekh Rayon", x: 45, y: 56, top: '56%', left: '45%' },
    { id: 4, name: "Parekh e-Trade Market (Textile)", x: 38, y: 68, top: '68%', left: '38%' },
    { id: 5, name: "Parekh Linen", x: 62, y: 52, top: '52%', left: '62%' },
    { id: 6, name: "Parekh Chamber of Textile", x: 35, y: 78, top: '78%', left: '35%' },
    { id: 7, name: "Parekh Southern Polyfabrics", x: 40, y: 78, top: '78%', left: '40%' },
  ];

  const [activePoint, setActivePoint] = useState(points[3]); // Default point to center

  return (
    <>
    <div className="min-h-screen bg-[#111111] text-zinc-100 font-sans selection:bg-amber-500/40 overflow-x-hidden relative">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://img.freepik.com/premium-vector/map-name-india-orange-yellow-vector-illustration_968957-10807.jpg?w=1060')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 border-b border-zinc-900 pb-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <Building size={20} className="text-amber-500" />
              </div>
              <h1 className="text-4xl font-serif text-white tracking-tight">HC Parekh & <span className="italic text-amber-500">Associates</span></h1>
            </div>
            <p className="mt-3 text-zinc-600 uppercase tracking-widest text-[11px] font-bold">Leading Textile Industry Partners | Gujarat Hub</p>
          </div>
          
          <div className="flex gap-4">
             <a href="https://www.hcparekh.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-zinc-800 rounded-xl text-xs uppercase tracking-widest font-bold text-zinc-300 hover:border-amber-500 hover:text-white transition-all">Visit Our Portal</a>
             <button className="px-6 py-3 bg-white text-black rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-amber-600 transition-all">Connect with Us</button>
          </div>
        </header>

        {/* Content Section with Map & Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left Panel - Dynamic Data (4 Columns) */}
          <motion.div 
            key={activePoint.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-4 bg-zinc-900 p-8 rounded-3xl border border-zinc-800 space-y-10 shadow-2xl"
          >
             <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-3xl bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
                   <Target className="text-amber-500" size={28}/>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white">{activePoint.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">Current Industry Hub Point</p>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-6 pt-10 border-t border-zinc-800/50 text-zinc-500 text-sm">
                <div className="space-y-1">
                   <Briefcase size={16} />
                   <p className="font-medium text-white">Service: Supply Chain</p>
                   <p className="text-xs">Connecting textile centers</p>
                </div>
                <div className="space-y-1">
                   <ExternalLink size={16} />
                   <p className="font-medium text-white">Status: Introduced</p>
                   <p className="text-xs">Live and Operational</p>
                </div>
             </div>

             <div className="pt-10 border-t border-zinc-800/50 space-y-4">
                <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold">All Operational Hubs</p>
                <div className="flex gap-2 flex-wrap">
                  {points.map((p) => (
                    <button key={p.id} onClick={() => setActivePoint(p)} className={`px-4 py-1.5 border border-zinc-800 rounded-full text-[10px] uppercase font-bold tracking-widest hover:border-amber-500 ${activePoint.id === p.id ? 'bg-amber-500 text-black' : 'text-zinc-400'}`}>
                      {p.name}
                    </button>
                  ))}
                </div>
             </div>
          </motion.div>

          {/* Right Panel - India Map with Interactivity (8 Columns) */}
          <div className="md:col-span-8 bg-black rounded-3xl border border-zinc-800 p-1 relative group overflow-hidden shadow-2xl">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="w-full aspect-[4/5] bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=22.9,80.6&zoom=5&size=800x1000&maptype=satellite&key=YOUR_API_KEY')] bg-cover bg-center rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
            />
            {/* Background Texture Overlay for Map */}
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-vector/map-name-india-orange-yellow-vector-illustration_968957-10807.jpg?w=1060')] opacity-10 rounded-3xl pointer-events-none"></div>
            
            {/* Point Markers */}
            <AnimatePresence>
                {points.map((p) => (
                  <motion.div
                    key={p.id}
                    className="absolute z-10 cursor-pointer"
                    style={{ top: p.top, left: p.left }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setActivePoint(p)}
                  >
                    {/* Ripple Effect for Active Point */}
                    {activePoint.id === p.id && (
                        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute -inset-2 rounded-full border-2 border-amber-500"></motion.div>
                    )}
                    
                    {/* The Point Marker */}
                    <div className={`w-3 h-3 rounded-full ${activePoint.id === p.id ? 'bg-amber-500' : 'bg-white'} border border-black shadow-lg shadow-black/30`}></div>
                    
                    {/* Point Name (Glow on Hover/Active) */}
                    <p className={`absolute top-4 left-1/2 -translate-x-1/2 -translate-y-full text-[10px] uppercase font-bold tracking-widest py-0.5 px-2 rounded-md whitespace-nowrap ${activePoint.id === p.id ? 'bg-black text-amber-500 border border-amber-500/50' : 'bg-black/50 text-white/70 border border-white/10 opacity-60 group-hover:opacity-100'}`}>
                        {p.name}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
            
            {/* Simple Map Footer with Info */}
            <div className="absolute bottom-4 left-4 p-4 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-3">
               <MapPin className="text-zinc-600" />
               <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">India Operational Map • Central Hub: Surat</p>
            </div>
          </div>
        </div>

        {/* Footer Branding */}
        <footer className="mt-24 pt-10 border-t border-zinc-900 text-center">
          <p className="text-[10px] tracking-[1.5em] text-zinc-700 uppercase font-bold">Pareekh Textile Collective &bull; Digital Heritage</p>
      
    </footer>
    </div>
    </div>

    </>
  );
};

export default Associates;