import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import BlogCard from './components/BlogCard';
import BlogPostView from './components/BlogPostView';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactForm from './components/ContactForm';
import MarketingDashboard from './components/MarketingDashboard';
import AIAssistant from './components/AIAssistant';
import { MOCK_BLOG_POSTS } from './constants';
import { PageView, BlogPost } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  const renderContent = () => {
    if (selectedPost) {
      return <BlogPostView post={selectedPost} onBack={handleBackToBlog} />;
    }

    switch (currentPage) {
      case PageView.HOME:
      case PageView.BLOG:
        return (
          <div className="space-y-8">
             {/* Hero Section for Home */}
             {currentPage === PageView.HOME && (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96">
                   <img 
                     src="https://picsum.photos/1200/600?random=hero" 
                     alt="Woman Healthy Lifestyle" 
                     className="absolute inset-0 w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8 md:px-16">
                      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                        Empower Your Beauty,<br/>Master Your Health
                      </h1>
                      <p className="text-gray-200 text-lg mb-8 max-w-lg">
                        Join thousands of women discovering the secrets to weight loss, nutrition, and financial freedom.
                      </p>
                      <button 
                        onClick={() => setCurrentPage(PageView.BLOG)}
                        className="w-fit bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg border-2 border-white/20"
                      >
                        Explore Articles
                      </button>
                   </div>
                </div>
             )}

            {/* Blog Grid */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-l-4 border-pink-500 pl-4">
              {currentPage === PageView.HOME ? 'Trending Now' : 'Latest Articles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MOCK_BLOG_POSTS.map(post => (
                <BlogCard key={post.id} post={post} onClick={() => handlePostClick(post)} />
              ))}
            </div>
            
            {/* Pagination Mock */}
            <div className="flex justify-center mt-8">
               <button className="px-4 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-l hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">Previous</button>
               <button className="px-4 py-2 bg-pink-600 text-white font-bold">1</button>
               <button className="px-4 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">2</button>
               <button className="px-4 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">3</button>
               <button className="px-4 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-r hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">Next</button>
            </div>
          </div>
        );
      case PageView.PRIVACY:
        return <PrivacyPolicy />;
      case PageView.CONTACT:
        return <ContactForm />;
      case PageView.DASHBOARD:
        return <MarketingDashboard />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar 
        currentPage={currentPage} 
        setPage={(page) => { setCurrentPage(page); setSelectedPost(null); }} 
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {renderContent()}
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-8">
            <Sidebar />
          </aside>
        </div>
      </main>

      <Footer setPage={(page) => { setCurrentPage(page); setSelectedPost(null); }} />
      <AIAssistant />
    </div>
  );
};

export default App;