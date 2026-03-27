import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';  // Professional minimal icons

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white pt-24 relative overflow-hidden">
      {/* Subtle silk fabric background overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/silk.png')] bg-repeat"></div>
      </div>

      {/* Hero / Intro */}
      <section className="py-24 md:py-32 px-6 text-center relative">
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest text-amber-50 mb-8 leading-tight">
            Connect with Pareekh Textile
          </h1>
          <p className="text-xl md:text-2xl text-amber-200/80 font-light max-w-4xl mx-auto leading-relaxed">
            Just as the gentle touch of pure mulberry silk opens the heart… we listen to every word, enquiry, or vision with the same care and attention.  
            <br className="hidden md:block" />
            Let us weave something timeless together.
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-12 opacity-70"></div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Indore Location Map - unchanged */}
          <div className="mb-20 text-center">
        

            <div className="rounded-3xl overflow-hidden border border-amber-900/40 shadow-xl shadow-amber-900/20 max-w-5xl mx-auto">
            <iframe
  src="https://www.google.com/maps?q=Surat,Gujarat,India&output=embed"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Pareekh Textile - Surat"
></iframe>

            </div>

            <p className="mt-8 text-amber-200/80 text-lg font-light italic">
              Visit our SURAT, GJ location or connect from anywhere in the world.
            </p>
          </div>

          {/* Contact Info + Form Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Professional Contact Details with Lucide Icons */}
            <div className="space-y-10">
              <div className="group bg-black/60 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20">
                <h3 className="text-2xl font-light text-amber-100 mb-6">Contact Information</h3>
                <ul className="space-y-6 text-left text-gray-200 text-lg">
                  <li className="flex items-center">
                    <Mail className="text-amber-400 mr-4 h-6 w-6" />  {/* Professional email icon */}
                    <a href="mailto:hello@pareekhtextile.com" className="hover:text-amber-200 transition-colors">
                      hello@pareekhtextile.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-amber-400 mr-4 h-6 w-6" />  {/* Clean phone icon */}
                    <a href="tel:+919876543210" className="hover:text-amber-200 transition-colors">
                      +9111111 11111
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="text-amber-400 mr-4 h-6 w-6" />  {/* Location pin icon */}
                    <span>SURAT, GJ, India</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="text-amber-400 mr-4 h-6 w-6" />  {/* Clock icon for hours */}
                    <span>Monday – Saturday: 10:00 AM – 7:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Social Links – Professional */}
              <div className="flex justify-center md:justify-start gap-10">
                <a 
                  href="https://wa.me/919876543210?text=Hello%20Pareekh%20Textile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-200 hover:text-amber-100 transition-colors text-lg font-medium uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageSquare className="h-5 w-5" /> WhatsApp  {/* Message icon as proxy for WhatsApp */}
                </a>
                <a 
                  href="https://instagram.com/pareekhtextile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-200 hover:text-amber-100 transition-colors text-lg font-medium uppercase tracking-wider flex items-center gap-2"
                >
                  Instagram  {/* Instagram ko text + optional custom icon, lekin simple rakha */}
                </a>
              </div>
            </div>

            {/* Right: Form - unchanged but added MessageSquare icon in heading */}
            <div className="bg-black/70 border border-amber-900/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
              <h3 className="text-2xl font-light text-amber-100 mb-6 flex items-center gap-3">
                <MessageSquare className="text-amber-400 h-6 w-6" />
                Send Your Message
              </h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 bg-black/50 border border-amber-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-black/50 border border-amber-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 bg-black/50 border border-amber-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-all duration-300"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message / Enquiry / Custom Request"
                  className="w-full px-6 py-4 bg-black/50 border border-amber-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="group relative w-full py-5 px-10 bg-gradient-to-r from-amber-900/40 to-amber-700/40 border border-amber-400/50 text-amber-100 text-lg uppercase tracking-widest overflow-hidden transition-all duration-700 hover:text-black hover:bg-amber-200 rounded-xl"
                >
                  <span className="relative z-10">Submit Enquiry</span>
                  <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-20 text-center">
            <p className="text-xl text-amber-200/70 font-light italic max-w-3xl mx-auto">
              Every conversation is valued with the same dedication we bring to every handwoven silk creation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;