import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Calendar, Clock, MessageSquare, CheckCircle, ChevronDown, Award } from 'lucide-react';

const BlackGoldAppointment = () => {
  const [submitted, setSubmitted] = useState(false);

  // Smooth appearance animation
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-white font-sans selection:bg-amber-500/30">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0a0a0a] p-12 rounded-[3rem] shadow-2xl text-center max-w-md border border-zinc-800 relative overflow-hidden"
        >
          {/* Silk Swirl background effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 blur-3xl rounded-full -mr-16 -mt-16 opacity-50"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-amber-500/20">
              <CheckCircle className="text-amber-500" size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-serif text-white leading-tight">Request <span className="italic text-amber-500">Received.</span></h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">Hum jald hi aapse sampark karenge. Dhanyawad!</p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="mt-8 text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] hover:text-white transition-colors"
            >
              Naya Appointment Book Karein
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 md:p-10 text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* Background Animated Silk Sway (Very subtle) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 3, 0],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[120%] h-[120%] bg-gradient-to-br from-amber-950/10 via-transparent to-transparent blur-[150px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-[0.03]"></div>
      </div>

      {/* Main Container */}
      <motion.div 
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl bg-[#0a0a0a] rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col md:flex-row border border-zinc-800 relative z-10"
      >
        
        {/* Left Side: Information (Simple & Dark) */}
        <div className="w-full md:w-2/5 p-10 md:p-16 border-r border-zinc-800/60 relative">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Award size={120} strokeWidth={1} className="text-amber-500"/>
          </div>
          
          <div className="flex flex-col h-full justify-between relative z-10 space-y-12">
            <div>
             
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-7xl font-serif leading-[1.1] tracking-tighter text-white"
              >
                Book Your <br /><span className="italic text-amber-500/90 font-light">Visit.</span>
              </motion.h1>
              <p className="mt-8 text-zinc-500 leading-relaxed text-sm max-w-sm">
                Join the legacy of master weavers in Surat. Fill in your details below for a private consultation or partnership meeting.
              </p>
            </div>
            
            <div className="space-y-6 pt-10 border-t border-zinc-900/50">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 transition-colors group-hover:border-amber-500 group-hover:bg-amber-500/10">
                  <Clock size={18} className="text-amber-500 group-hover:text-amber-300" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Operating Hours</p>
                  <p className="text-sm font-medium text-zinc-300 tracking-wider">11:00 AM - 07:00 PM (Surat Hub)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: High-Contrast Clear Form */}
        <div className="w-full md:w-3/5 p-10 md:p-16 bg-[#0a0a0a]">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Name Field */}
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-light font-bold mb-2 block transition-colors group-focus-within:text-amber-500">Full Name</label>
                <div className="flex items-center border-b-2 border-light group-focus-within:border-amber-500 transition-all py-3 relative">
                  <User size={18} className="text-light mr-3 group-focus-within:text-amber-500" />
                  <input type="text" className="bg-transparent outline-none w-full text-lg text-white placeholder:text-zinc-800 font-medium tracking-wide" placeholder="Ex. Renuka Agrawal" required />
                  {/* Subtle silk line shine effect on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-light font-bold mb-2 block transition-colors group-focus-within:text-amber-500">Contact Number</label>
                <div className="flex items-center border-b-2 border-light group-focus-within:border-amber-500 transition-all py-3 relative">
                  <Phone size={18} className="text-light mr-3 group-focus-within:text-amber-500" />
                  <input type="tel" className="bg-transparent outline-none w-full text-lg text-white placeholder:text-zinc-800 font-medium tracking-wide" placeholder="+91 00000 00000" required />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-light font-bold mb-2 block group-focus-within:text-amber-500">Purpose of Meeting</label>
              <div className="relative">
                <select className="w-full bg-[#111111] border border-light rounded-2xl p-5 outline-none focus:border-amber-500 transition-all appearance-none text-zinc-300 font-medium cursor-pointer tracking-wider text-sm focus:bg-amber-950/20">
                  <option>Textile Selection (Wholesale Hub)</option>
                  <option>Bridal & Luxury Couture Consultation</option>
                  <option>SkinnVeda Wellness Appointment</option>
                  <option>Business Partnership & MOU</option>
                </select>
                <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-light group-focus-within:text-amber-500 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Date Field */}
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-light font-bold mb-2 block transition-colors group-focus-within:text-amber-500">Select Date</label>
                <div className="flex items-center border-b-2 border-light group-focus-within:border-amber-500 transition-all py-3 relative">
                  <Calendar size={18} className="text-light mr-3 group-focus-within:text-amber-500" />
                  <input type="date" className="bg-transparent outline-none w-full text-lg text-zinc-300 font-medium tracking-wide selection:bg-amber-500/40" required />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                </div>
              </div>

              {/* Message/Note */}
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-[0.3em] text-light font-bold mb-2 block transition-colors group-focus-within:text-amber-500">Special Note</label>
                <div className="flex items-center border-b-2 border-light group-focus-within:border-amber-500 transition-all py-3 relative">
                  <MessageSquare size={18} className="text-light mr-3 group-focus-within:text-amber-500" />
                  <input type="text" className="bg-transparent outline-none w-full text-lg text-white placeholder:text-zinc-800 font-medium tracking-wide" placeholder="Any specific requirements?" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                </div>
              </div>
            </div>

            {/* Big Action Button with Silk Sheen Hover */}
            <button 
              type="submit" 
              className="w-full py-6 bg-amber-600 text-black rounded-2xl font-bold uppercase tracking-[0.4em] text-xs hover:bg-white hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 mt-6 overflow-hidden relative group"
            >
              <span className="relative z-10">Confirm Appointment Request</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 origin-left ease-in-out"></div>
            </button>

            <p className="text-center text-[10px] text-light uppercase tracking-widest font-bold">Secure Booking Portal &bull; PAREKH Collective Digital Heritage</p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default BlackGoldAppointment;