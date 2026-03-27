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
   
    { name: 'Product Photo Gallery', path: '/gallery-sarees' },
    { name: 'Our Management', path: '/management' },
    { name: 'Trade Enquiry', path: '/trade-enquiry' },
    { name: 'e-Quotation', path: '/e-quotation' },
    { name: 'e-Auction', path: '/e-auction' },
    { name: 'Tender & Contract', path: '/tender-contract' },
    { name: 'Career Page', path: '/careers' },
    { name: 'Circular', path: '/circular' },
    { name: 'Customer Review', path: '/reviews' },
    { name: 'Visit with Appointment', path: '/appointment' },
    { name: 'Media Gallery', path: '/media' },
    { name: 'Our Textile Associates', path: '/associates' },
  ];

  return (
    <>
    
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
   <h1 className="flex items-center gap-x-1 text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
  <span className="text-white">PAREKH</span>
  <span className="text-yellow-200">SILK</span>
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
    {/* WhatsApp Floating Button */}
<div className="fixed bottom-6 right-6 z-[200]">
  <a
    href="https://wa.me/91111111111"
    target="_blank"
    rel="noopener noreferrer"
    className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
  >
    {/* Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-7 h-7 fill-white"
    >
      <path d="M16.001 2.667c-7.364 0-13.333 5.97-13.333 13.334 0 2.353.615 4.654 1.783 6.683L2.667 29.333l6.823-1.756a13.25 13.25 0 006.511 1.689h.005c7.364 0 13.333-5.97 13.333-13.334 0-3.568-1.39-6.923-3.92-9.453a13.254 13.254 0 00-9.418-3.812zm0 24.001h-.004a10.96 10.96 0 01-5.583-1.52l-.401-.238-4.049 1.043 1.08-3.949-.26-.41a10.96 10.96 0 01-1.68-5.89c0-6.077 4.946-11.023 11.024-11.023 2.944 0 5.709 1.146 7.791 3.229a10.947 10.947 0 013.233 7.793c-.002 6.077-4.948 11.023-11.022 11.023zm6.046-8.209c-.331-.165-1.956-.965-2.259-1.074-.302-.11-.523-.165-.744.165-.221.331-.854 1.074-1.048 1.295-.192.221-.386.248-.717.083-.331-.165-1.396-.514-2.66-1.64-.983-.877-1.647-1.959-1.84-2.29-.192-.331-.02-.51.145-.675.149-.148.331-.386.496-.579.165-.192.221-.331.331-.552.11-.221.055-.414-.028-.579-.083-.165-.744-1.793-1.02-2.457-.268-.643-.54-.556-.744-.566-.192-.009-.414-.011-.634-.011-.221 0-.579.083-.883.414-.302.331-1.157 1.131-1.157 2.758 0 1.627 1.186 3.198 1.352 3.419.165.221 2.334 3.566 5.655 5.001.79.341 1.406.545 1.887.697.793.252 1.514.217 2.084.132.636-.095 1.956-.799 2.231-1.57.275-.771.275-1.433.192-1.57-.082-.137-.302-.221-.633-.386z"/>
    </svg>

    {/* Pulse Animation */}
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>
  </a>
</div>

    </>
  );
};

export default Header;