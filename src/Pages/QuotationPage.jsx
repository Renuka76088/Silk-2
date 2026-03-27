import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, Anchor, Layers } from 'lucide-react';

const QuotationPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-light selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full -mr-64 -mt-64 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-800/20 blur-[120px] rounded-full -ml-48 -mb-48"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 border border-amber-500/30 rounded-full mb-6"
          >
            <FileText className="text-amber-200" size={24} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tight"
          >
            Request a <span className="italic text-amber-200">Bespoke</span> Quote
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Experience the finest threads from Surat. Fill in the details below and our 
            textile experts will craft a custom proposal for your silk requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side: Summary / Trust Factors */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-8 rounded-3xl">
              <h3 className="text-amber-200 font-serif text-2xl mb-4">Why PAREKH Silk?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="text-amber-200 mt-1"><Anchor size={18} /></div>
                  <p className="text-sm text-zinc-300">Authentic Mulberry & Tussar Silk sourced directly from Gujarat hubs.</p>
                </li>
                <li className="flex gap-4">
                  <div className="text-amber-200 mt-1"><Layers size={18} /></div>
                  <p className="text-sm text-zinc-300">Custom weaving & dyeing options available for bulk orders.</p>
                </li>
              </ul>
            </div>
            
            <div className="p-8 border border-amber-200/20 rounded-3xl bg-gradient-to-br from-amber-500/5 to-transparent">
               <p className="text-xs uppercase tracking-[0.3em] text-amber-200 mb-2 font-bold">Need Help?</p>
               <h4 className="text-xl font-serif">Speak with our Weaver</h4>
               <p className="text-zinc-500 text-sm mt-2">+91 98XXX XXXXX</p>
            </div>
          </div>

          {/* Right Side: The Quotation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-12 text-black shadow-2xl relative overflow-hidden"
          >
            {/* Form Section */}
            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Full Name</label>
                  <input type="text" className="w-full border-b-2 border-zinc-100 py-3 outline-none focus:border-amber-600 transition-all font-medium text-lg" placeholder="Renuka Agrawal" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Organization</label>
                  <input type="text" className="w-full border-b-2 border-zinc-100 py-3 outline-none focus:border-amber-600 transition-all font-medium text-lg" placeholder="Company Name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Silk Variety</label>
                  <select className="w-full border-b-2 border-zinc-100 py-3 outline-none focus:border-amber-600 transition-all font-medium text-lg appearance-none cursor-pointer">
                    <option>Banarasi Silk</option>
                    <option>Pure Mulberry</option>
                    <option>Raw Silk (Gharaura)</option>
                    <option>Custom Blend</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Estimated Quantity (Meters)</label>
                  <input type="number" className="w-full border-b-2 border-zinc-100 py-3 outline-none focus:border-amber-600 transition-all font-medium text-lg" placeholder="500+" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Specific Requirements</label>
                <textarea rows="3" className="w-full border-b-2 border-zinc-100 py-3 outline-none focus:border-amber-600 transition-all font-medium text-lg resize-none" placeholder="E.g. Double zari work, Pantone color #453..."></textarea>
              </div>

              <button className="group w-full py-6 bg-[#0a0a0a] text-white rounded-2xl flex items-center justify-center gap-4 hover:bg-amber-600 transition-all duration-500 overflow-hidden relative">
                <span className="relative z-10 uppercase tracking-[0.4em] text-xs font-bold">Request Quotation</span>
                <Send size={16} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>

            {/* Background Texture for White Card */}
            <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none">
                <img src="https://www.transparenttextures.com/patterns/silk.png" alt="silk pattern" />
            </div>
          </motion.div>

        </div>

        {/* Decorative Footer */}
        <div className="mt-20 text-center text-zinc-600 text-[10px] tracking-[0.5em] uppercase font-bold">
          PAREKH Textiles &bull; Surat &bull; India
        </div>
      </div>
    </div>
  );
};

export default QuotationPage;