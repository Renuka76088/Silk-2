import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile main menu
  const [isProductsOpen, setIsProductsOpen] = useState(false); // products dropdown

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    console.log('Menu toggled to:', !isOpen); // debug ke liye, console check karo
  };

  const mainMenu = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Pages', path: '#', isDropdown: true },
    { name: 'Product', path: '/product' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const productsDropdown = [
   
    { name: 'Product Photo Gallery (Silk Sarees)', path: '/gallery-sarees' },
    { name: 'Our Management', path: '/management' },
    { name: 'Trade Enquiry (e-Form)', path: '/trade-enquiry' },
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Tender & Contract', path: '/tender-contract' },
    { name: 'Career Page', path: '/careers' },
    { name: 'Circular', path: '/circular' },
    { name: 'Customer Review', path: '/reviews' },
    { name: 'Visit with Appointment (e-Form)', path: '/appointment' },
    { name: 'Media Gallery', path: '/media' },
    { name: 'Our Textile Associates (India Map)', path: '/associates' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl border-b border-amber-900/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Menu */}
  <nav className="hidden lg:flex items-center space-x-12">
  {mainMenu.map((item) => (
    item.isDropdown ? (
      <div 
        key={item.name}
        className="relative group py-4" // 'py-4' acts as a bridge so menu doesn't close
      >
        <span className="text-base uppercase tracking-wider text-gray-200 hover:text-amber-200 transition-colors flex items-center gap-1 cursor-pointer">
          {item.name}
          <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>

        {/* Dropdown Container: Full Screen Height */}
        <div className="absolute top-full left-0 w-80 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-[200]">
          <div 
            className="bg-white border-r border-gray-200 shadow-2xl py-8 px-6 overflow-y-auto h-[80vh] "
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {/* Header inside dropdown for better B2B UI */}
            <div className="mb-6 pb-2 border-b border-gray-100">
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                Browse Categories
              </span>
            </div>

            {productsDropdown.map((sub) => (
              <Link
                key={sub.name}
                to={sub.path}
                className="block py-4 text-sm font-semibold text-gray-800 hover:text-[#C5A27D] transition-all border-b border-gray-50 last:border-none hover:pl-2"
              >
                {sub.name}
              </Link>
            ))}
            
            {/* Bottom Space to ensure last item is clickable */}
            <div className="h-40"></div>
          </div>
        </div>
      </div>
    ) : (
      <Link
        key={item.name}
        to={item.path}
        className="text-base uppercase tracking-wider text-gray-200 hover:text-amber-200 transition-colors duration-300"
      >
        {item.name}
      </Link>
    )
  ))}
</nav>

{/* Inline CSS to hide scrollbar strip globally or specifically */}
<style>
  {`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `}
</style>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none z-50"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-0 bg-black/95 backdrop-blur-xl transition-all duration-700 ease-in-out overflow-hidden z-40
          ${isOpen ? 'translate-y-0 opacity-100 h-screen' : '-translate-y-full opacity-0 h-0'}`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen py-20 px-6 space-y-8 text-center">
          {mainMenu.map((item) => (
            item.isDropdown ? (
              <div key={item.name} className="w-full">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="text-xl uppercase tracking-widest text-gray-200 hover:text-amber-300 transition-colors w-full flex justify-center items-center gap-3 py-4"
                >
                  {item.name}
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div className="mt-6 space-y-6 pl-8 text-left w-full max-h-96 overflow-y-auto border-t border-amber-900/30 pt-6">
                    {productsDropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => {
                          setIsOpen(false);
                          setIsProductsOpen(false);
                        }}
                        className="block text-lg text-gray-300 hover:text-amber-200 transition-colors py-2"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-xl uppercase tracking-widest text-gray-200 hover:text-amber-300 transition-colors py-4"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;