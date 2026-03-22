import React from 'react';
import { motion } from 'framer-motion';
import {  Award, ArrowRight, Briefcase, ShieldCheck } from 'lucide-react';

const TenderPage = () => {
  const tenders = [
    {
      id: "TND-2026-001",
      title: "Annual Silk Yarn Supply",
      location: "Surat Hub",
      value: "Est. ₹50L - ₹1Cr",
      deadline: "April 15, 2026",
      status: "Open",
    },
    {
      id: "TND-2026-002",
      title: "Corporate Uniform Weaving",
      location: "Mumbai Office",
      value: "Est. ₹25L - ₹40L",
      deadline: "May 02, 2026",
      status: "Open",
    },
    {
      id: "TND-2026-003",
      title: "Export Quality Zari Procurement",
      location: "Ujjain Unit",
      value: "Est. ₹80L+",
      deadline: "April 28, 2026",
      status: "Review",
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-light selection:bg-amber-500/30">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-amber-200 mb-6"
            >
              <Briefcase size={18} />
              <span className="text-xs uppercase tracking-[0.4em] font-bold">Partnership Portal</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif leading-none"
            >
              Tenders & <br />
              <span className="italic text-zinc-500 font-light">Contracts.</span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-zinc-500 max-w-sm text-sm leading-relaxed mb-4"
          >
            Join the legacy of Pareekh Textiles. We invite professional weavers, suppliers, and logistics partners to participate in our upcoming projects.
          </motion.p>
        </div>
      </section>

      {/* Tender Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tenders.map((tender, index) => (
            <motion.div
              key={tender.id}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[32px] hover:border-amber-500/50 transition-all group relative overflow-hidden"
            >
              {/* Status Badge */}
              <span className={`absolute top-6 right-6 px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${tender.status === 'Open' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>
                {tender.status}
              </span>

              <p className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase mb-4">{tender.id}</p>
              <h3 className="text-2xl font-serif mb-6 group-hover:text-amber-200 transition-colors">{tender.title}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs border-b border-zinc-800/50 pb-2">
                  <span className="text-zinc-500 uppercase tracking-widest">Location</span>
                  <span className="text-white">{tender.location}</span>
                </div>
                <div className="flex justify-between text-xs border-b border-zinc-800/50 pb-2">
                  <span className="text-zinc-500 uppercase tracking-widest">Value</span>
                  <span className="text-white">{tender.value}</span>
                </div>
                <div className="flex justify-between text-xs pb-2">
                  <span className="text-zinc-500 uppercase tracking-widest">Deadline</span>
                  <span className="text-white">{tender.deadline}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-white text-black rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-amber-500 transition-all">
                Download Documents <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Standards Section (Creative Sidebar) */}
      <section className="py-24 bg-zinc-900/20 border-y border-zinc-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif">Compliance & <br/>Quality Assurance</h2>
            <p className="text-zinc-400 leading-relaxed">Every contract with Pareekh Textiles follows strict ISO and Textile Committee standards of India. We value transparency and long-term professional growth.</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="text-amber-500" size={32} />
                <h4 className="font-serif text-lg">Verified Bidders</h4>
                <p className="text-xs text-zinc-600 uppercase tracking-widest leading-loose">Strict KYC for all textile partners.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Award className="text-amber-500" size={32} />
                <h4 className="font-serif text-lg">Fair Evaluation</h4>
                <p className="text-xs text-zinc-600 uppercase tracking-widest leading-loose">Automated point-based scoring.</p>
              </div>
            </div>
          </div>
          
          {/* Abstract Silk Motion Design */}
          <div className="relative">
             <div className="w-full aspect-square bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-[100px] absolute animate-pulse"></div>
             <div className="relative z-10 p-12 bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/10 text-center">
                <h3 className="text-6xl font-serif mb-4 italic">700+</h3>
                <p className="text-amber-500 uppercase tracking-[0.4em] text-xs font-bold">Successfully Executed Contracts</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-12 text-center border-t border-zinc-900 mt-20">
        <p className="text-[10px] text-zinc-700 font-bold tracking-[0.8em] uppercase italic">Pareekh Collective &bull; Gujarat Hub</p>
      </footer>
    </div>
  );
};

export default TenderPage;