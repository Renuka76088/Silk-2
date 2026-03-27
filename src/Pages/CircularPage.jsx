import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Bell, Sparkles, ChevronRight, Hash, Download, Gavel } from 'lucide-react';

const CircularPage = () => {
  const circularData = [
    {
      id: "08",
      title: "Revised Zari Procurement Policy",
      desc: "New guidelines for sourcing high-grade metallic threads from certified Surat vendors.",
      date: "18 MAR",
      tag: "Operations"
    },
    {
      id: "07",
      title: "Annual Silk Festival Sponsorship",
      desc: "PAREKH Collective's participation and budget allocation for the upcoming National Textile Expo.",
      date: "10 MAR",
      tag: "Marketing"
    },
    {
      id: "06",
      title: "Employee Wellness & Onboarding",
      desc: "Introduction of the new health-first framework for all weaving units and corporate staff.",
      date: "02 MAR",
      tag: "HR"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-amber-500/40 overflow-x-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-amber-600/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full"></div>
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        
        {/* Creative Header */}
        <header className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 border border-amber-500/20 bg-amber-500/5 rounded-full mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold">Registry 2026</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-serif tracking-tighter leading-none"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">Parekh</span> <br />
            <span className="italic font-light text-amber-500/90">Circular</span>
          </motion.h1>
        </header>

        {/* The Timeline "Thread" Design */}
        <div className="relative">
          {/* Central Vertical Thread (Silk Line) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-amber-500/40 to-transparent hidden lg:block"></div>

          <div className="space-y-32">
            {circularData.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-[45%] group">
                  <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-zinc-800 to-transparent group-hover:from-amber-500/40 transition-all duration-700">
                    <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 md:p-14 relative overflow-hidden border border-white/5 shadow-2xl">
                      
                      {/* Floating ID Number */}
                      <span className="absolute -top-4 -right-4 text-[12rem] font-serif text-white/[0.02] pointer-events-none group-hover:text-amber-500/[0.05] transition-colors">
                        {item.id}
                      </span>

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-md">{item.tag}</span>
                          <div className="h-[1px] w-12 bg-zinc-800"></div>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{item.date}</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight group-hover:text-amber-200 transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-sm">
                          {item.desc}
                        </p>

                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white group-hover:text-amber-500 transition-colors">
                            Explore Document <ChevronRight size={14} />
                          </button>
                          <button className="p-3 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                            <Download size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central Connector (The Needle Point) */}
                <div className="hidden lg:flex items-center justify-center relative z-20">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }} 
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute w-8 h-8 rounded-full border border-amber-500/30"
                  ></motion.div>
                </div>

                {/* Aesthetic Spacer for Desktop (Empty Side) */}
                <div className="hidden lg:block lg:w-[45%]">
                   <div className="flex items-center gap-4 opacity-10 grayscale hover:grayscale-0 transition-all duration-700">
                      <FileText size={40} strokeWidth={1} className="text-amber-500" />
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Branding */}
        <footer className="mt-40 pt-10 border-t border-zinc-900 text-center">
          <div className="flex justify-center items-center gap-8 mb-8 opacity-40">
            <Sparkles size={20} />
            <Hash size={20} />
            <Gavel size={20} className="rotate-12" />
          </div>
          <p className="text-[10px] tracking-[1em] text-zinc-700 uppercase font-bold">
            PAREKH Collective &bull; Digital Heritage
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CircularPage;