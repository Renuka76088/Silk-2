import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 border-t border-amber-900/20 overflow-hidden">
      {/* Background Decorative Element - Subtle Silk Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
                <Link to="/" className="z-[130] flex items-center no-underline group">
             {/* 🔘 Silver "P" Box with Metallic Shine */}
             <div 
               style={{
                 background: 'linear-gradient(135deg, #f8f9fa 0%, #d1d5db 50%, #adb5bd 100%)',
                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
               }}
               className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] border-2 border-[#94a3b8] rounded-xl flex items-center justify-center mr-3 shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:border-[#cbd5e1]"
             >
               <span 
                 style={{
                   textShadow: '1px 1px 0px rgba(255,255,255,0.5)'
                 }}
                 className="text-[#475569] font-black text-2xl md:text-3xl leading-none"
               >
                 P
               </span>
             </div>
           
             {/* 🔘 Text Section (Silver/Steel Palette) */}
             <div className="flex flex-col justify-center">
               <h1 className="flex items-center text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
                 <span className="text-white">PAREKH</span>
                 <span className="text-yellow-200 ml-1">SILK</span>
               </h1>
               <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] text-yellow-200 uppercase mt-1">
                 SURAT • GJ
               </span>
             </div>
           </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs" style={{fontSize:'17px'}}>
              Crafting timeless elegance through the finest silk traditions. A legacy of quality, trust, and textile excellence since generations.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-amber-900/30 flex items-center justify-center text-amber-200 hover:bg-amber-200 hover:text-black transition-all duration-500">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
       <div>
  <h3 className="text-amber-100 font-medium uppercase text-xs mb-8" style={{fontSize:'20px'}}>
    Navigation
  </h3>
  <ul className="space-y-4 text-sm text-gray-400">
    {/* Home Link */}
    <li style={{fontSize:'17px'}}>
      <Link to="/" className="hover:text-amber-200 transition-colors duration-300 flex items-center gap-2 group">
        <span style={{fontSize:'17px'}} className="w-0 h-px bg-amber-200 transition-all duration-300 group-hover:w-4"></span>
        Home
      </Link>
    </li>

    {/* About Us Link */}
    <li style={{fontSize:'17px'}}>
      <Link to="/about" className="hover:text-amber-200 transition-colors duration-300 flex items-center gap-2 group">
        <span className="w-0 h-px bg-amber-200 transition-all duration-300 group-hover:w-4"></span>
        About Us
      </Link>
    </li>

    {/* Product Gallery Link */}
    <li style={{fontSize:'17px'}}>
      <Link to="/product" className="hover:text-amber-200 transition-colors duration-300 flex items-center gap-2 group">
        <span className="w-0 h-px bg-amber-200 transition-all duration-300 group-hover:w-4"></span>
        Product Gallery
      </Link>
    </li>

    {/* Wholesale Inquiry Link */}
    <li style={{fontSize:'17px'}}>
      <Link to="/trade-enquiry" className="hover:text-amber-200 transition-colors duration-300 flex items-center gap-2 group">
        <span className="w-0 h-px bg-amber-200 transition-all duration-300 group-hover:w-4"></span>
        Wholesale Inquiry
      </Link>
    </li>

    {/* Career Link */}
    <li style={{fontSize:'17px'}}>
      <Link to="/careers" className="hover:text-amber-200 transition-colors duration-300 flex items-center gap-2 group">
        <span className="w-0 h-px bg-amber-200 transition-all duration-300 group-hover:w-4"></span>
        Career
      </Link>
    </li>
  </ul>
</div>

          {/* Column 3: B2B Services */}
          <div>
            <h3 className="text-amber-100 font-medium uppercase text-xs mb-8" style={{fontSize:'20px'}}>B2B Solutions</h3>
            <ul className="space-y-4 text-sm text-gray-400" style={{fontSize:'17px'}}>
              {['Trade Enquiry', 'E-Quotation', 'Bulk Orders', 'Textile Associates', 'Global Export'].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-amber-200 transition-colors duration-300 flex items-center gap-2">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-amber-100 font-medium uppercase text-xs mb-8" style={{fontSize:'20px'}}>Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-start gap-3" style={{fontSize:'17px'}}>
                <FaMapMarkerAlt className="text-amber-400 mt-1 shrink-0" />
                <span>Ring Road, Surat, <br />Gujarat - 395002, India</span>
              </p>
              <p className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-amber-50">Available for Appointments</span>
              </p>
            </div>
            <div className="pt-4">
              <Link 
                to="/contact" style={{fontSize:'17px'}} 
                className="inline-block px-6 py-3 border border-amber-200/20 text-amber-100 text-[11px] font-bold tracking-widest uppercase hover:bg-amber-200 hover:text-black transition-all duration-500 rounded-sm"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
            © {currentYear} PAREKH SILK. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
            <Link to="/privacy" className="hover:text-amber-200 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-200 transition-colors">Terms of Trade</Link>
          </div>
        </div>
      </div>

      {/* Subtle decorative "P" in background */}
      <div className="absolute -bottom-10 -right-10 text-[20rem] font-black text-white/[0.02] pointer-events-none select-none">
        P
      </div>
    </footer>
  );
};

export default Footer;