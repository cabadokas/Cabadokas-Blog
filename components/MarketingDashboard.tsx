import React, { useState } from 'react';

const MarketingDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('keywords');
  const [autoPostStatus, setAutoPostStatus] = useState(false);

  const keywords = ["Work from home", "How to make money", "Trump", "Bitcoin", "USDT", "Elections", "Weight Loss"];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
        <i className="fa-solid fa-magnet text-pink-500 mr-3"></i>
        Magnetic Marketing Tools
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('keywords')}
          className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === 'keywords' ? 'bg-pink-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
        >
          Keyword Monitor
        </button>
        <button 
          onClick={() => setActiveTab('social')}
          className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === 'social' ? 'bg-pink-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
        >
          Social Auto-Poster
        </button>
        <button 
          onClick={() => setActiveTab('geo')}
          className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === 'geo' ? 'bg-pink-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
        >
          Geo-Targeting
        </button>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 min-h-[300px]">
        
        {activeTab === 'keywords' && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="font-bold text-lg dark:text-white">Active Keyword Scanners</h3>
            <p className="text-sm text-gray-500">Scanning global trends and sending automated invites...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keywords.map((kw, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded shadow-sm border-l-4 border-green-500">
                  <span className="font-mono text-sm dark:text-gray-300">{kw}</span>
                  <span className="flex items-center text-xs text-green-600 font-bold">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Scanning
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 text-sm text-blue-800 dark:text-blue-200">
              <i className="fa-solid fa-info-circle mr-2"></i>
              System is automatically identifying users searching for these terms on Quora, Twitter, and Reddit and preparing outreach messages.
            </div>
          </div>
        )}

        {activeTab === 'social' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
               <h3 className="font-bold text-lg dark:text-white">One-Click Multi-Platform Publishing</h3>
               <button 
                 onClick={() => setAutoPostStatus(!autoPostStatus)}
                 className={`px-6 py-2 rounded-full font-bold transition ${autoPostStatus ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
               >
                 {autoPostStatus ? 'ACTIVE' : 'INACTIVE'}
               </button>
            </div>
            <p className="text-sm text-gray-500">Automatically sync blog posts to 19 connected social networks.</p>
            
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 text-center">
               {['Twitter', 'Facebook', 'Insta', 'TikTok', 'LinkedIn', 'Pinterest', 'Quora', 'Discord'].map((p) => (
                 <div key={p} className={`p-3 rounded-lg ${autoPostStatus ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
                   <div className="text-xs font-bold">{p}</div>
                   <div className="text-[10px] mt-1">{autoPostStatus ? 'Connected' : 'Paused'}</div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {activeTab === 'geo' && (
          <div className="space-y-4 animate-fade-in">
             <h3 className="font-bold text-lg dark:text-white">Geo-Magnetic Targeting</h3>
             <div className="flex flex-wrap gap-2">
               {['USA', 'Canada', 'Australia', 'Europe', 'Russia', 'China', 'UAE'].map(country => (
                 <span key={country} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                   <i className="fa-solid fa-location-dot mr-1"></i> {country}
                 </span>
               ))}
             </div>
             <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
               [Interactive World Map Visualization Placeholder]
             </div>
             <p className="text-xs text-gray-500 text-center">Targeting high-value traffic regions for Women's Health & Beauty niches.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default MarketingDashboard;