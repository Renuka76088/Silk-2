import React from 'react';

const BlogsSection = () => {
  // Sample blog data – aap real data se replace kar dena (CMS ya static)
  const blogPosts = [
    {
      id: 1,
      title: 'The Whisper of Banarasi Zari: Threads That Tell Centuries-Old Stories',
      excerpt: 'Explore how gold zari weaves legacy into every drape — from Varanasi looms to modern wardrobes. A journey through light, luster, and timeless artistry.',
      image: 'https://thumbs.dreamstime.com/b/close-banarasi-silk-saree-gold-zari-work-intricate-patterns-traditional-indian-textile-luxury-fashion-heritage-413220512.jpg',
      date: 'March 15, 2026',
      category: 'Heritage Weaves',
    },
    {
      id: 2,
      title: 'Caring for Your Pure Mulberry Silk: Rituals for Eternal Shine',
      excerpt: 'Silk is alive — learn the ancient and modern ways to nurture its softness, sheen, and strength so it drapes beautifully for generations.',
      image: 'https://m.media-amazon.com/images/I/71+9oZ3ZfZL._AC_UF1000,1000_QL80_.jpg',
      date: 'February 28, 2026',
      category: 'Silk Care',
    },
    {
      id: 3,
      title: 'Kanchipuram to Kanjeevaram: Decoding the Gold Standard of Silk',
      excerpt: 'What makes a true Kanchipuram saree heirloom-worthy? From contrasting borders to temple motifs — the elements that define regal elegance.',
      image: 'https://gaatha.org/wp-content/uploads/Signifiance-tribhuvanam-saree.jpg.webp',
      date: 'January 10, 2026',
      category: 'Regional Mastery',
    },
    {
      id: 4,
      title: 'Pairing Silk Sarees with Modern Minimal Jewelry',
      excerpt: 'Less is more — discover how understated gold and diamond pieces let the silk fabric become the true hero of your ensemble.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'December 5, 2025',
      category: 'Styling Secrets',
    },
    // Add more as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white pt-24">
      {/* Blog Hero / Intro Section – Silk poetic feel */}
      <section className="py-24 md:py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Subtle silk texture overlay – optional, ya real silk bg image daal sakte ho */}
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/silk.png')]"></div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest text-amber-100 mb-8">
            Woven Words
          </h1>
          <p className="text-xl md:text-2xl text-amber-200/80 font-light max-w-3xl mx-auto leading-relaxed">
            Stories spun from silk threads — heritage, craftsmanship, care, and the quiet luxury of draping emotion.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-10"></div>
        </div>
      </section>

      {/* Blog Grid – Premium cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden bg-black/60 border border-amber-900/30 hover:border-amber-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-amber-900/30 transform hover:-translate-y-4"
            >
              {/* Image with silk-like overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                <span className="absolute top-4 right-4 px-4 py-1 bg-amber-900/60 text-amber-200 text-xs uppercase tracking-wider rounded-full border border-amber-500/30">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-sm text-amber-200/70 mb-3">
                  {post.date}
                </p>
                <h3 className="text-2xl font-light text-amber-100 mb-4 group-hover:text-amber-200 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <button className="text-amber-200 text-sm uppercase tracking-widest flex items-center group-hover:text-amber-100 transition-colors">
                  Read the Story
                  <span className="ml-3 transform group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action / More Blogs */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-wider text-amber-100 mb-8">
          More Threads Await
        </h2>
        <p className="text-xl text-amber-200/70 mb-10 max-w-2xl mx-auto">
          Dive deeper into the world of silk — its secrets, its soul, its shimmer.
        </p>
        <button className="group relative px-12 py-5 border-2 border-amber-200 text-amber-200 text-lg uppercase tracking-widest overflow-hidden transition-all duration-700 hover:text-black hover:bg-amber-200">
          <span className="relative z-10">Explore All Blogs</span>
          <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
        </button>
      </section>
    </div>
  );
};

export default BlogsSection;