import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { PageView } from '../types';

interface FooterProps {
  setPage: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">CABADOKAS</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Empowering women worldwide through health, beauty, and financial independence. 
              Join our community and explore our curated affiliate partners.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`${link.color} text-white w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition transform hover:scale-110`}
                  title={link.platform}
                >
                  <i className={`${link.icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => setPage(PageView.HOME)} className="hover:text-white">Home</button></li>
              <li><button onClick={() => setPage(PageView.BLOG)} className="hover:text-white">Latest Posts</button></li>
              <li><button onClick={() => setPage(PageView.DASHBOARD)} className="hover:text-white">Marketing Tools</button></li>
              <li><button onClick={() => setPage(PageView.CONTACT)} className="hover:text-white">Contact Support</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => setPage(PageView.PRIVACY)} className="hover:text-white">Privacy Policy</button></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Affiliate Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cabadokas. All rights reserved.</p>
          <p className="mt-2">This site uses Google AdSense and Affiliate Links.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;