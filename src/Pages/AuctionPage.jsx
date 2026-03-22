import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gavel, Clock, TrendingUp, ShieldCheck, User, Phone, MapPin } from 'lucide-react';

const AuctionPage = () => {
  const [bid, setBid] = useState(45000);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, mins: 45, secs: 12 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, mins: prev.mins - 1, secs: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 sec
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-light selection:bg-amber-500/30">
      
      {/* Top Status Bar */}
    

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Product Image (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-zinc-800 group"
          >
            <img 
              src="https://img.freepik.com/free-photo/peach-silk-fabric-texture_23-2151943858.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" 
              alt="Vintage Banarasi Silk" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-serif">Vintage Mulberry Zari</h2>
                <p className="text-zinc-400 mt-2 tracking-widest uppercase text-xs">Lot #4402 • 100% Pure Silk</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <ShieldCheck className="text-amber-200" size={24} />
              </div>
            </div>
          </motion.div>

    
        </div>

        {/* Right Side: Bidding Form & Info (5 Columns) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Timer Card */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[32px] flex justify-between items-center backdrop-blur-sm">
            <div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Time Remaining</p>
              <div className="flex gap-4 text-3xl font-serif text-amber-200">
                <span>{timeLeft.hours}h</span>
                <span>{timeLeft.mins}m</span>
                <span>{timeLeft.secs}s</span>
              </div>
            </div>
            <Clock className="text-zinc-700" size={40} strokeWidth={1} />
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-[40px] p-8 md:p-10 text-black shadow-2xl relative overflow-hidden">
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Gavel className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-serif">Bid Placed Successfully</h3>
                  <p className="text-zinc-500 mt-2">Your bid of ₹{bid.toLocaleString()} is now active.</p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form onSubmit={handleBidSubmit} className="space-y-6 relative z-10">
              <div className="mb-4">
                <h3 className="text-2xl font-serif">Place Official Bid</h3>
                <p className="text-zinc-400 text-[10px] uppercase tracking-widest mt-1 font-bold italic">Secure Entry • Pareekh Collective</p>
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                <div className="relative group">
                  <User size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-amber-600 transition-colors" />
                  <input type="text" placeholder="Full Name" className="w-full border-b border-zinc-100 pl-7 py-3 outline-none focus:border-amber-600 transition-all font-medium" required />
                </div>
                <div className="relative group">
                  <Phone size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-amber-600 transition-colors" />
                  <input type="tel" placeholder="Contact Number" className="w-full border-b border-zinc-100 pl-7 py-3 outline-none focus:border-amber-600 transition-all font-medium" required />
                </div>
              </div>

              {/* Price Selector */}
              <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100 text-center">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-4 font-bold">Your Offer (Min. Increment ₹500)</p>
                <div className="flex items-center justify-between">
                  <button type="button" onClick={() => setBid(bid - 500)} className="w-10 h-10 rounded-full border border-zinc-200 text-2xl hover:bg-black hover:text-white transition-all">−</button>
                  <div className="text-4xl font-serif text-black">₹{bid.toLocaleString()}</div>
                  <button type="button" onClick={() => setBid(bid + 500)} className="w-10 h-10 rounded-full border border-zinc-200 text-2xl hover:bg-black hover:text-white transition-all">+</button>
                </div>
              </div>

              <button type="submit" className="group w-full py-5 bg-black text-white rounded-2xl flex items-center justify-center gap-3 hover:bg-amber-600 transition-all duration-500 shadow-xl shadow-black/10">
                <Gavel size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="uppercase tracking-[0.3em] text-xs font-bold">Place My Bid Now</span>
              </button>
              
              <p className="text-[9px] text-zinc-400 text-center uppercase tracking-tighter">
                By bidding, you agree to our <span className="underline cursor-pointer">Auction Terms</span>
              </p>
            </form>
          </div>

          {/* Activity Feed */}
          <div className="space-y-4">
         
            <div className="space-y-2">
              {[
                { user: "User_882", amount: "₹44,500", time: "2m ago" },
                { user: "User_104", amount: "₹43,000", time: "5m ago" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold">{item.user[5]}</div>
                    <span className="text-zinc-400 text-xs font-medium">{item.user}</span>
                  </div>
                  <span className="font-serif text-amber-200">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuctionPage;