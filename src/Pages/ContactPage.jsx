import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20 pb-16">
      {/* Subtle transparent silk overlay for fabric feel */}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-[0.04]">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOF9lbGVnYW50X3doaXRlX3NpbGtfZmFicmljX3RleHR1cmVfcG5nX292ZXJsYXlfZWZmZWN0X190cmFuc3BhcmVudF9iYWNrZ3JvdW5kXzRiZGY4YzU4LTg5ZjQtNDBkZi1iZWEwLTI3ZGY4ZjA5YzE5Nl8xLnBuZw.png')`,
            backgroundSize: '350px auto',
          }}
        />
      </div>

      {/* Hero Section - Compact */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-amber-50 mb-4">
            PAREKH Silk
          </h1>
          <p className="text-xl md:text-2xl font-light text-amber-200/80 uppercase tracking-wider mb-6">
            Whisper Your Vision
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We receive every message with the same quiet reverence as silk drapes the skin.
          </p>
        </div>
      </section>

      {/* Main Content - Reduced gaps, tighter layout */}
      <section className="py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Location + Details */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-amber-100 mb-6">
                Our Atelier
              </h2>
              <div className="rounded-2xl overflow-hidden border border-amber-900/30 shadow-xl shadow-amber-950/30 hover:shadow-amber-900/50 transition-shadow duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117667.7!2d75.78491!3d22.719569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1c0829f7%3A0x4b3b0e3e8e3e8e3e!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="PAREKH Silk - SURAT, GJ"
                  className="grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
              <p className="mt-4 text-amber-200/70 text-base italic">
                SURAT, GJ
              </p>
            </div>

            {/* Contact Details - Tight spacing */}
            <div className="space-y-5 text-base md:text-lg text-gray-200">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@PAREKHsilk.com" className="hover:text-amber-200 transition-colors">
                  hello@PAREKHsilk.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-amber-200 transition-colors">
                  +9111111 11111
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Monday – Saturday: 10 AM – 7 PM</span>
              </div>
            </div>

            {/* Social Links - Compact */}
            <div className="flex gap-8 mt-4">
              <a href="https://wa.me/919876543210" className="text-amber-200 hover:text-amber-100 transition-colors uppercase tracking-wider text-sm font-medium">
                WhatsApp
              </a>
              <a href="https://instagram.com/PAREKHsilk" className="text-amber-200 hover:text-amber-100 transition-colors uppercase tracking-wider text-sm font-medium">
                Instagram
              </a>
            </div>
          </div>

          {/* Right: Form - Clean & tight */}
          <div className="bg-black/50 border border-amber-900/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-3xl font-light text-amber-100 mb-8">
              Begin the Conversation
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-transparent border-b border-amber-800/50 text-white placeholder-amber-200/50 focus:border-amber-400 focus:outline-none transition-all text-base"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 bg-transparent border-b border-amber-800/50 text-white placeholder-amber-200/50 focus:border-amber-400 focus:outline-none transition-all text-base"
              />
              <input
                type="tel"
                placeholder="Phone (Optional)"
                className="w-full px-5 py-4 bg-transparent border-b border-amber-800/50 text-white placeholder-amber-200/50 focus:border-amber-400 focus:outline-none transition-all text-base"
              />
              <textarea
                rows={4}
                placeholder="Your Message / Vision for Silk"
                className="w-full px-5 py-4 bg-transparent border-b border-amber-800/50 text-white placeholder-amber-200/50 focus:border-amber-400 focus:outline-none transition-all text-base resize-none"
              ></textarea>
              <button
                type="submit"
                className="group relative w-full py-5 px-10 bg-gradient-to-r from-amber-900/30 to-amber-700/20 border border-amber-400/40 text-amber-100 uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-500 rounded-full mt-4 text-base"
              >
                <span className="relative z-10">Send Whisper</span>
                <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Closing - Short & elegant */}
      <section className="py-12 px-6 text-center">
        <p className="text-lg md:text-xl text-amber-200/70 font-light italic max-w-3xl mx-auto">
          Every thread of conversation is cherished — just as our silk is.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;