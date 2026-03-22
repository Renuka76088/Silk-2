import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquareHeart, Award } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Ananya Iyer",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    comment: "The pure Kanchipuram silk from Pareekh has a drape that standard silks simply can't match. It feels like a second skin, incredibly soft and luxurious.",
    product: "Kanchipuram Heritage Collection",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    location: "New Delhi",
    rating: 5,
    comment: "Sourced Banarasi silk for my boutique. The interplay of gold threads (Zari) with the silk base is masterfully done. Pareekh maintains exceptional consistency.",
    product: "Banarasi Brocade - Wholesale",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 4,
    comment: "Absolutely in love with the raw silk texture. It's rustic yet elegant. The custom dyeing service was accurate, matching my Pantone reference perfectly.",
    product: "Custom Dyed Raw Silk",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400"
  },
  {
    id: 4,
    name: "Siddharth Rao",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment: "I used their lightweight mulberry silk for a summer collection. The sheen is sophisticated, not flashy. Truly a premium textile partner.",
    product: "Mulberry Silk - Lighter GSM",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400"
  },
  {
    id: 5,
    name: "Meenakshi Das",
    location: "Kolkata, West Bengal",
    rating: 5,
    comment: "The Tussar silk has this beautiful, natural gold hue. You can feel the authenticity of the weave. Pareekh textiles are a cut above the rest.",
    product: "Tussar Silk Handloom",
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=400"
  }
];

// Custom Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 items-center">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-zinc-600"} 
        />
      ))}
      <span className="text-xs text-zinc-500 ml-2 font-mono">({rating}.0)</span>
    </div>
  );
};

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-amber-500/30 overflow-hidden font-sans">
      
      {/* Background: Liquid Silk Motion Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-amber-900/10 blur-[150px] rounded-full opacity-60"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-zinc-800/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* Creative Header */}
        <header className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-500/20 bg-amber-500/5 rounded-full mb-6 shadow-inner"
          >
            <MessageSquareHeart size={14} className="text-amber-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500">VOICES OF TRUST</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl font-serif tracking-tighter leading-none"
          >
            Client <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-600 font-light">Elegance.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-zinc-500 text-sm tracking-[0.1em] max-w-xl mx-auto uppercase font-medium leading-relaxed"
          >
            Real stories, master weaves. How Pareekh Textiles redefines luxury for designers and patrons across India.
          </motion.p>
        </header>

        {/* Floating Masonry Review Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="break-inside-avoid relative p-1 rounded-[2rem] bg-gradient-to-br from-zinc-800 to-transparent hover:from-amber-500/30 transition-all duration-700 group shadow-lg shadow-black/30"
            >
              <div className="bg-[#0a0a0a] rounded-[1.9rem] p-8 md:p-10 relative overflow-hidden border border-white/5 flex flex-col h-full">
                
                {/* Decorative Quote Icon (Glows on Hover) */}
                <Quote className="absolute -top-6 -left-6 text-zinc-800 opacity-20 group-hover:text-amber-900 group-hover:opacity-100 transition-all duration-700 rotate-12" size={100} strokeWidth={1} />
                
                {/* Review Header: User Info */}
                <div className="flex items-center gap-5 mb-8 relative z-10">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-zinc-800 shadow-xl group-hover:border-amber-500/50 transition-colors duration-500" 
                  />
                  <div>
                    <h4 className="text-xl font-serif text-white group-hover:text-amber-200 transition-colors leading-tight">{review.name}</h4>
                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-medium">{review.location}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="mb-6 relative z-10">
                  <StarRating rating={review.rating} />
                </div>

                {/* Comment (The Core Content) */}
                <p className="text-zinc-300 text-[15px] leading-relaxed mb-8 flex-grow relative z-10 font-normal">
                  "{review.comment}"
                </p>

                {/* Product Tag (Glows on Hover) */}
                <div className="relative z-10 mt-auto pt-6 border-t border-zinc-800/60 flex items-center justify-between gap-4">
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">PURCHASED:</p>
                  <span className="px-3 py-1.5 bg-zinc-900 rounded-lg text-xs text-zinc-400 font-medium group-hover:bg-amber-500/10 group-hover:text-amber-200 transition-colors">
                    {review.product}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Footer */}
        <footer className="mt-40 pt-10 border-t border-zinc-900 text-center">
          <div className="flex justify-center items-center gap-8 mb-8 opacity-40">
            <Award size={20} className="text-amber-500" />
            <Award size={20} className="text-amber-500" />
            <Award size={20} className="text-amber-500" />
          </div>
          <p className="text-[10px] tracking-[1em] text-zinc-700 uppercase font-bold">
            PAREEKH TEXTILE COLLECTIVE &bull; GUJARAT HUB
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ReviewsPage;