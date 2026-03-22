import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Mail, GraduationCap, MapPin, Award, CheckCircle, Send, FileText, ArrowRight } from 'lucide-react';

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-light selection:bg-amber-500/30">
      
      {/* Hero Section with Silk Texture Feel */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full -mr-48 -mt-48 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-amber-500/30 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-200">Join Our Team</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-none"
          >
            Current <span className="italic text-zinc-500 font-light">Openings.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-zinc-500 uppercase tracking-[0.2em] text-xs font-medium"
          >
            Explore opportunities to grow with Pareekh Collective
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Job Cards (8 Columns) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Card 1: HR Manager */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 rounded-[40px] hover:border-amber-500/40 transition-all group overflow-hidden relative"
          >
            <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
              <div>
                <span className="bg-amber-500/10 text-amber-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block italic">Management • Full Time</span>
                <h3 className="text-4xl font-serif text-white group-hover:text-amber-200 transition-colors">HR Manager</h3>
                <div className="flex items-center gap-4 mt-4 text-zinc-400 text-sm">
                  <span className="flex items-center gap-1"><MapPin size={14}/> Bengaluru, KA</span>
                  <span className="flex items-center gap-1 font-bold text-amber-200/80 underline decoration-amber-500/30 underline-offset-4 tracking-wider">CTC: ₹5.25 L.P.A</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-amber-200 text-xs uppercase tracking-widest font-bold flex items-center gap-2 underline underline-offset-8 decoration-zinc-800">Essential Criteria</h4>
                <ul className="space-y-3 text-sm text-zinc-400 list-disc list-inside">
                  <li>MBA (HR) / Graduate with 8+ Years Exp.</li>
                  <li>Proficiency in English, Hindi & Regional Languages.</li>
                  <li>Willing to Tour & Travel within India.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-amber-200 text-xs uppercase tracking-widest font-bold flex items-center gap-2 underline underline-offset-8 decoration-zinc-800">Responsibilities</h4>
                <ul className="space-y-3 text-sm text-zinc-400 list-disc list-inside leading-relaxed">
                  <li>End-to-End Technical & Non-Tech Recruitment.</li>
                  <li>Payroll, EPF, ESI & Labour Law Compliance.</li>
                  <li>Campus Interviews & Talent Pipeline.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-800 flex justify-between items-center">
               <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium italic">Hiring via 3-Round Interview Process</p>
               <a href="mailto:hemant.parekh2012@gmail.com" className="bg-white text-black px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-all flex items-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">Apply Now <ArrowRight size={14} /></a>
            </div>
          </motion.div>

          {/* Card 2: Social Media Influencer */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-zinc-900/60 to-black border border-zinc-800 p-8 md:p-12 rounded-[40px] hover:border-amber-500/40 transition-all group overflow-hidden relative"
          >
            <div className="mb-8">
              <span className="bg-zinc-800 text-zinc-400 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block italic">Campaign • Brand Promotion</span>
              <h3 className="text-4xl font-serif text-white">Social Media Influencer</h3>
              <p className="mt-4 text-zinc-400 text-sm leading-relaxed max-w-2xl">
                We provide ready-to-post, well-designed advertisements for our tangible products. Long-term online brand advertisements on your own platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              <div className="space-y-4">
                <h4 className="text-amber-200 text-xs uppercase tracking-widest font-bold underline underline-offset-8 decoration-zinc-800">Target Sectors</h4>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-300 uppercase tracking-tighter">
                  <span className="flex items-center gap-2"><CheckCircle size={10} className="text-amber-200"/> Textile & Garments</span>
                  <span className="flex items-center gap-2"><CheckCircle size={10} className="text-amber-200"/> Pulp & Paper</span>
                  <span className="flex items-center gap-2"><CheckCircle size={10} className="text-amber-200"/> Medical & Health</span>
                  <span className="flex items-center gap-2"><CheckCircle size={10} className="text-amber-200"/> FMCG</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-amber-200 text-xs uppercase tracking-widest font-bold underline underline-offset-8 decoration-zinc-800">Required Platforms</h4>
                <div className="flex gap-4 flex-wrap">
                  {['LinkedIn', 'Facebook', 'Instagram', 'YouTube'].map(p => (
                    <span key={p} className="px-3 py-1 bg-zinc-800 rounded text-[10px] uppercase font-bold tracking-widest group-hover:bg-amber-500/20 group-hover:text-amber-200 transition-colors">{p}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <FileText className="text-amber-200" />
                <p className="text-xs text-zinc-500 leading-tight italic uppercase tracking-widest">Submit Quotation in PDF format including payment terms & conditions.</p>
              </div>
              <a href="mailto:hemant.parekh2012@gmail.com" className="bg-amber-600 text-black px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all">Submit Quotation</a>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Contact & Note (4 Columns) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Main Contact Card */}
          <div className="bg-white rounded-[40px] p-8 text-black relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-6">
              <h4 className="text-2xl font-serif leading-none">Send your <br/><span className="italic text-amber-700 underline decoration-amber-200">Resume / CV</span></h4>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold leading-relaxed">Please mention the position in the subject line.</p>
              
              <div className="pt-6 border-t border-zinc-100 flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Email CV To:</p>
                <a href="mailto:hemant.parekh2012@gmail.com" className="text-lg font-medium hover:text-amber-700 transition-colors flex items-center gap-2">
                  <Mail size={16}/> hemant.parekh2012@gmail.com
                </a>
              </div>
            </div>
            {/* Silk Pattern Texture */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-16 -mt-16 opacity-50 blur-2xl"></div>
          </div>

          {/* Important Notes */}
          <div className="p-8 border border-zinc-800 rounded-[40px] space-y-6 bg-zinc-950/50">
             <h4 className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-amber-200">
               <CheckCircle size={14}/> Important Notes
             </h4>
             <ul className="space-y-4 text-[11px] text-zinc-500 leading-relaxed uppercase tracking-widest">
                <li className="flex gap-2 font-medium"><span className="text-amber-200">•</span> We are NOT a placement consultancy.</li>
                <li className="flex gap-2 font-medium"><span className="text-amber-200">•</span> Influencers are NOT responsible for marketing.</li>
                <li className="flex gap-2 font-medium"><span className="text-amber-200">•</span> Ad material will be provided by Pareekh Collective.</li>
             </ul>
          </div>

          {/* Branding Sidebar */}
          <div className="text-center py-12">
            <div className="h-[1px] w-24 bg-zinc-900 mx-auto mb-6"></div>
            <p className="text-[10px] tracking-[0.8em] text-zinc-700 uppercase font-bold">Pareekh Collective &copy; 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;