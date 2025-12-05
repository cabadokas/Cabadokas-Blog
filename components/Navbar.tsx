import React, { useEffect } from 'react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, toggleTheme, isDarkMode }) => {
  
  useEffect(() => {
    // Define the initialization function globally
    (window as any).googleTranslateElementInit = () => {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_element'
        );
      }
    };

    // Load the script if it doesn't exist
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script is already loaded (e.g. navigation back to page), manually trigger init
      if ((window as any).google && (window as any).google.translate) {
         // Short timeout to ensure the div is mounted in the DOM
         setTimeout(() => {
             (window as any).googleTranslateElementInit();
         }, 100);
      }
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md border-b border-pink-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setPage(PageView.HOME)}>
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-lg mr-3 shadow-lg">
              <i className="fa-solid fa-gem text-2xl"></i>
            </div>
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 notranslate">
              CABADOKAS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => setPage(PageView.HOME)}
              className={`${currentPage === PageView.HOME ? 'text-pink-600 font-bold' : 'text-gray-600 dark:text-gray-300'} hover:text-pink-500 transition`}
            >
              Home
            </button>
            <button 
              onClick={() => setPage(PageView.BLOG)}
              className={`${currentPage === PageView.BLOG ? 'text-pink-600 font-bold' : 'text-gray-600 dark:text-gray-300'} hover:text-pink-500 transition`}
            >
              Blog
            </button>
            <button 
              onClick={() => setPage(PageView.DASHBOARD)}
              className={`${currentPage === PageView.DASHBOARD ? 'text-pink-600 font-bold' : 'text-gray-600 dark:text-gray-300'} hover:text-pink-500 transition`}
            >
              Tools
            </button>
            <button 
              onClick={() => setPage(PageView.CONTACT)}
              className={`${currentPage === PageView.CONTACT ? 'text-pink-600 font-bold' : 'text-gray-600 dark:text-gray-300'} hover:text-pink-500 transition`}
            >
              Contact
            </button>
            
            {/* Google Translate Container */}
            <div id="google_translate_element" className="origin-top scale-90"></div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <i className="fa-solid fa-sun text-yellow-400"></i> : <i className="fa-solid fa-moon text-gray-600"></i>}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={() => setPage(PageView.BLOG)} className="text-gray-600 dark:text-gray-300 p-2">
                <i className="fa-solid fa-bars text-xl"></i>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;