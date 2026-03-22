import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: "The Quiet Rebellion of Pure Zari",
    excerpt: "When gold threads refuse to stay silent. How Banarasi artisans are redefining luxury in 2026.",
    image: "https://img.freepik.com/premium-photo/blue-cloth-texture-background_44073-1577.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80",
    date: "18 MARCH",
    category: "Heritage",
  },
  {
    id: 2,
    title: "Silk That Remembers Your Skin",
    excerpt: "Mulberry's memory. The science and poetry behind a drape that never forgets.",
    image: "https://img.freepik.com/free-vector/swirl-fabric-silk-backdrop-luxurious-vinous-drapery-folded-textile-with-soft-spiral-vortex-satin-waves_33099-1542.jpg?t=st=1774088535~exp=1774092135~hmac=882d3ad4de26ad0f9183897293cbdbc46df5d0b41797d7e72a76e44972b41b6c&w=1060",
    date: "09 FEB",
    category: "Tactile",
  },
  {
    id: 2,
    title: "Silk That Remembers Your Skin",
    excerpt: "Mulberry's memory. The science and poetry behind a drape that never forgets.",
    image: "https://images.unsplash.com/photo-1631737859822-d954fbb08f5f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "09 FEB",
    category: "Tactile",
  },
  {
    id: 2,
    title: "Silk That Remembers Your Skin",
    excerpt: "Mulberry's memory. The science and poetry behind a drape that never forgets.",
    image: "https://images.unsplash.com/photo-1594734415578-00fc9540929b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "09 FEB",
    category: "Tactile",
  },
];

const Blogs = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading with Animated Line */}
        <div className="mb-24 relative">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-extralight text-white tracking-tighter"
          >
            JOURNAL <span className="text-amber-500/50 italic font-serif">01</span>
          </motion.h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-amber-500/50 to-transparent mt-4"></div>
        </div>

        {/* Unique Alternating Layout */}
        <div className="space-y-40">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              {/* Image Side with Hover Reveal Effect */}
              <motion.div 
                className="w-full md:w-3/5 relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                </div>
                {/* Floating Category Label */}
                <div className="absolute -top-6 -left-6 bg-amber-500 text-black px-6 py-2 text-xs font-bold tracking-widest uppercase rotate-[-5deg]">
                  {post.category}
                </div>
              </motion.div>

              {/* Text Side with Modern Typography */}
              <motion.div 
                className="w-full md:w-2/5 space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 text-amber-500/70 text-sm tracking-[0.3em]">
                  <span className="h-[1px] w-12 bg-amber-500/50"></span>
                  {post.date}
                </div>
                <h3 className="text-4xl md:text-5xl font-light text-white leading-tight hover:text-amber-200 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p style={{fontSize:'20px'}} className="text-gray-400 text-lg font-light leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Minimalist Interactive Button */}
                <button className="group relative pt-6 flex items-center text-white text-xs uppercase tracking-[0.5em] overflow-hidden">
                  <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-10" style={{fontSize:'17px'}}>Read Story</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-500 transition-all duration-500 group-hover:h-[2px]"></span>
                  <span className="absolute left-0 top-10 text-amber-500 transition-transform duration-500 group-hover:-translate-y-10">Read Story</span>
                </button>
              </motion.div>
            </div>
          ))}
        </div>

          
      </div>
    </section>
  );
};

export default Blogs;