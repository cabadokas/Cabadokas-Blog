import React, { useState } from 'react';
import { BlogPost } from '../types';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden animate-fade-in-up w-full">
      {/* Back Button Header - Sticky for better mobile UX */}
      <div className="p-4 border-b border-gray-100 dark:border-gray-700 sticky top-20 z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur transition-colors">
        <button 
          onClick={onBack} 
          className="text-gray-500 hover:text-pink-600 transition flex items-center text-sm md:text-base font-medium group"
        >
          <i className="fa-solid fa-arrow-left mr-2 transform group-hover:-translate-x-1 transition-transform"></i> 
          Back to Articles
        </button>
      </div>
      
      {/* Zoomable Image Container */}
      <div 
        className={`relative overflow-hidden cursor-zoom-in group ${
          isZoomed 
            ? 'fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-2 sm:p-4' 
            : 'w-full h-64 sm:h-80 md:h-96'
        }`}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <img 
          src={post.image} 
          alt={post.title} 
          className={`transition-all duration-300 ease-in-out ${
            isZoomed 
              ? 'max-w-full max-h-full object-contain cursor-zoom-out shadow-2xl rounded-sm' 
              : 'w-full h-full object-cover group-hover:scale-105'
          }`}
        />
        {!isZoomed && (
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <i className="fa-solid fa-magnifying-glass-plus mr-2"></i> Zoom
          </div>
        )}
        {isZoomed && (
           <button className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
             <i className="fa-solid fa-xmark text-xl"></i>
           </button>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-8 md:p-10">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-pink-100 dark:border-pink-800">
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author/Meta Info */}
        <div className="flex items-center mb-8 border-b border-gray-100 dark:border-gray-700 pb-6">
           <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold mr-3 shrink-0">
             C
           </div>
           <div>
             <div className="text-sm font-bold text-gray-900 dark:text-white">Cabadokas Editor</div>
             <div className="text-xs text-gray-500 dark:text-gray-400">{post.date} · 5 min read</div>
           </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-pink dark:prose-invert max-w-none mb-10">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:text-pink-600 first-letter:mr-3 first-letter:float-left">
            {post.content}
          </p>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          
          {/* Featured Quote / Highlight */}
          <div className="my-8 sm:my-10 p-6 sm:p-8 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl border-l-8 border-pink-500 shadow-sm relative overflow-hidden">
             <i className="fa-solid fa-quote-right absolute top-4 right-4 text-6xl text-pink-200 dark:text-pink-900 opacity-50"></i>
             <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2 relative z-10 uppercase tracking-widest text-xs">Expert Insight</h4>
             <p className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200 italic relative z-10">
              "Consistency is key. Whether it's skincare or business, small daily actions lead to massive results over time. Trust the process."
            </p>
          </div>
          
           <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Affiliate Links Section */}
        {post.affiliateLinks && post.affiliateLinks.length > 0 && (
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-700 mb-10">
            <h3 className="font-bold text-xl mb-6 flex items-center text-gray-900 dark:text-white">
              <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 p-2 rounded-lg mr-3">
                 <i className="fa-solid fa-bag-shopping"></i>
              </span>
              Shop This Look
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.affiliateLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-pink-500"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 group-hover:text-pink-500 transition-colors mr-3 shrink-0">
                      <i className="fa-brands fa-amazon text-xl"></i>
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{link.label}</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-gray-300 group-hover:text-pink-500 transition-colors ml-2"></i>
                </a>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-4 text-center">
              We earn a commission if you make a purchase, at no additional cost to you.
            </p>
          </div>
        )}

        {/* Share Widget */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-8 gap-4">
           <div className="text-center sm:text-left">
             <span className="font-bold text-gray-900 dark:text-white block text-lg">Share this article</span>
             <span className="text-sm text-gray-500 dark:text-gray-400">Spread the word to your friends</span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-2">
             {[
               { icon: 'fa-twitter', color: 'bg-[#1DA1F2]', name: 'Twitter' },
               { icon: 'fa-facebook-f', color: 'bg-[#4267B2]', name: 'Facebook' },
               { icon: 'fa-instagram', color: 'bg-[#E1306C]', name: 'Instagram' },
               { icon: 'fa-whatsapp', color: 'bg-[#25D366]', name: 'WhatsApp' },
               { icon: 'fa-pinterest-p', color: 'bg-[#BD081C]', name: 'Pinterest' }
             ].map((social, i) => (
                <button 
                  key={i}
                  className={`${social.color} text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:opacity-90 hover:scale-110 transition-transform shadow-md`}
                  title={`Share on ${social.name}`}
                >
                  <i className={`fa-brands ${social.icon} text-lg`}></i>
                </button>
             ))}
             <button className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow-sm">
                <i className="fa-solid fa-link"></i>
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;