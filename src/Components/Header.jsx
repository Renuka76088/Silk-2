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
        <Link 
          to="/" 
          className="text-3xl md:text-4xl font-light tracking-[0.5em] text-white hover:text-amber-200 transition-colors duration-300"
        >
          PAREEKH
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-12">
          {mainMenu.map((item) => (
            item.isDropdown ? (
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <span className="text-base uppercase tracking-wider text-gray-200 hover:text-amber-200 transition-colors flex items-center gap-1 cursor-pointer">
                  {item.name}
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-4 w-80 bg-black/85 backdrop-blur-lg border border-amber-900/20 rounded-xl shadow-2xl py-5 px-6 overflow-y-auto max-h-[70vh]">
                    {productsDropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block py-3 text-base text-gray-200 hover:text-amber-200 transition-colors border-b border-amber-900/10 last:border-none hover:bg-amber-900/20 rounded-md"
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
                className="text-base uppercase tracking-wider text-gray-200 hover:text-amber-200 transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

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