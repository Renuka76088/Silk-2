import React from 'react';

const TradeEnquiry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden pt-20 pb-20">
      {/* Subtle silk texture overlay for premium fabric feel */}
      <div className="fixed inset-0 pointer-events-none mix-blend-soft-light opacity-[0.035]">
        <div 
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOF9lbGVnYW50X3doaXRlX3NpbGtfZmFicmljX3RleHR1cmVfcG5nX292ZXJsYXlfZWZmZWN0X190cmFuc3BhcmVudF9iYWNrZ3JvdW5kXzRiZGY4YzU4LTg5ZjQtNDBkZi1iZWEwLTI3ZGY4ZjA5YzE5Nl8xLnBuZw.png')`,
            backgroundSize: '380px auto',
          }}
        />
      </div>

      {/* Hero Banner – Elegant & Professional */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-amber-50 mb-4">
            Trade Membership Enquiry
          </h1>
          <p className="text-xl md:text-2xl font-light text-amber-200/80 tracking-wider uppercase">
            Join the Legacy of Pure Silk Excellence
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Become an authorized partner of PAREKH Textile — where premium silk meets trusted trade relationships.
          </p>
        </div>
      </section>

      {/* Form Section – Clean, Gold-Premium & Attractive */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-black/60 border border-amber-800/40 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-amber-950/30">
          <form className="space-y-7">
            {/* Authorized Official */}
            <div>
              <label className="block text-amber-200 text-base font-light mb-2">
                Name of Authorized Official of the Chamber / Code No.
              </label>
              <input
                type="text"
                placeholder="Full Name / Code No."
                className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white placeholder-amber-200/50 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                required
              />
            </div>

            {/* Applicant Details */}
            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <label className="block text-amber-200 text-base font-light mb-2">
                  Name of the Applicant
                </label>
                <input
                  type="text"
                  placeholder="Applicant Full Name"
                  className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white placeholder-amber-200/50 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-amber-200 text-base font-light mb-2">
                  Title / Designation in Textile Business
                </label>
                <input
                  type="text"
                  placeholder="e.g. Proprietor / Director / Partner"
                  className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white placeholder-amber-200/50 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-200 text-base font-light mb-2">
                Address of the Business
              </label>
              <textarea
                rows={3}
                placeholder="Complete Business Address"
                className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white placeholder-amber-200/50 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none resize-none"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <label className="block text-amber-200 text-base font-light mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white placeholder-amber-200/50 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-amber-200 text-base font-light mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="business@email.com"
                  className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white placeholder-amber-200/50 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-200 text-base font-light mb-2">
                URL of the Business (if any)
              </label>
              <input
                type="url"
                placeholder="https://www.yourbusiness.com"
                className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white placeholder-amber-200/50 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <label className="block text-amber-200 text-base font-light mb-2">
                  Nature of Business
                </label>
                <select
                  className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                  required
                >
                  <option value="">Select Nature</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Manufacturer">Manufacturer</option>
                  <option value="Exporter">Exporter</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <label className="block text-amber-200 text-base font-light mb-2">
                  Category of Business
                </label>
                <select
                  className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Proprietorship">Proprietorship</option>
                  <option value="Partnership">Partnership</option>
                  <option value="LLP">LLP</option>
                  <option value="Private Limited">Private Limited</option>
                  <option value="Ltd">Ltd</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            {/* Document Upload */}
            <div>
              <label className="block text-amber-200 text-base font-light mb-2">
                Upload Documents (GST, MSME, Trade License, Labour License, CIN, etc.)
              </label>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full px-5 py-4 bg-black/40 border border-amber-800/50 rounded-lg text-white file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-200/20 file:text-amber-200 hover:file:bg-amber-200/40 transition-all cursor-pointer"
                required
              />
              <p className="text-amber-200/60 text-sm mt-2">
                Max 5 files • PDF, JPG, PNG preferred
              </p>
            </div>

            {/* Undertaking Checkbox */}
            <div className="flex items-start gap-4 mt-8">
              <input
                type="checkbox"
                id="undertaking"
                className="mt-1.5 w-5 h-5 bg-black border-amber-600 rounded accent-amber-500 focus:ring-amber-400"
                required
              />
              <label htmlFor="undertaking" className="text-gray-300 text-base leading-relaxed">
                “I have read the Terms & Conditions of subscription for membership in the Chamber of Textile. All the information provided by me and the documents uploaded thereof are true and authentic to the best of my knowledge and belief.”
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <button
                type="button"
                className="flex-1 py-5 px-8 bg-transparent border-2 border-amber-200/60 text-amber-200 text-lg uppercase tracking-widest hover:bg-amber-200/10 transition-all duration-500 rounded-full"
              >
                Preview
              </button>
              <button
                type="submit"
                className="group flex-1 relative py-5 px-8 bg-gradient-to-r from-amber-800/50 to-amber-600/50 border border-amber-400/40 text-amber-100 text-lg uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-700 rounded-full shadow-lg shadow-amber-900/30"
              >
                <span className="relative z-10">Submit Application</span>
                <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-6 text-center">
        <p className="text-amber-200/70 text-lg font-light italic max-w-3xl mx-auto">
          Your partnership helps preserve and promote the legacy of pure Indian silk craftsmanship.
        </p>
      </section>
    </div>
  );
};

export default TradeEnquiry;