import React, { useState, useEffect, useRef } from 'react';
import { AFFILIATE_PROGRAMS } from '../constants';

const Sidebar: React.FC = () => {
  const [traffic, setTraffic] = useState(8420);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Live traffic simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTraffic(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.error("Audio play failed:", e);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="space-y-8">
      {/* Live Visitor Counter */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-t-4 border-pink-500">
        <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
          Live Visitors
        </h3>
        <div className="text-4xl font-black text-gray-900 dark:text-white font-mono">
          {traffic.toLocaleString()}
        </div>
        <p className="text-xs text-gray-500 mt-2">Updating in real-time...</p>
      </div>

      {/* Music Player */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold"><i className="fa-solid fa-music mr-2"></i> Relax & Read</h3>
          <div className="text-xs bg-white/20 px-2 py-1 rounded">Radio FM</div>
        </div>
        <div className="flex justify-center mb-4">
           <div className={`w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
             <i className="fa-solid fa-compact-disc text-3xl"></i>
           </div>
        </div>
        <button 
          onClick={toggleAudio}
          className="w-full bg-white text-indigo-600 py-2 rounded-lg font-bold hover:bg-indigo-50 transition"
        >
          {isPlaying ? 'Pause Music' : 'Play Ambience'}
        </button>
        <audio ref={audioRef} loop>
          {/* Using a stable Wikimedia Commons file (Erik Satie - Gymnopédie No. 1) */}
          <source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b7/Erik_Satie_-_Gymnop%C3%A9die_No._1.ogg/Erik_Satie_-_Gymnop%C3%A9die_No._1.ogg.mp3" type="audio/mpeg" />
          <source src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Erik_Satie_-_Gymnop%C3%A9die_No._1.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* AI Sales Funnel (Simulated) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="font-bold text-gray-800 dark:text-white mb-4">
          <i className="fa-solid fa-robot mr-2 text-pink-500"></i>
          AI Sales Magnet
        </h3>
        <div className="space-y-4">
          <div className="text-sm">
            <div className="flex justify-between mb-1 text-gray-600 dark:text-gray-300">
              <span>Optimizing Traffic</span>
              <span className="text-green-500 font-bold">98%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[98%] animate-pulse"></div>
            </div>
          </div>
          <div className="text-sm">
            <div className="flex justify-between mb-1 text-gray-600 dark:text-gray-300">
              <span>Affiliate Matching</span>
              <span className="text-blue-500 font-bold">Active</span>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800 text-xs text-blue-600 dark:text-blue-300">
              Scanning user interests: "Keto", "Lipstick", "Work from home"...
            </div>
          </div>
        </div>
      </div>

      {/* Affiliate Partners List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 dark:border-gray-700">
          Trusted Partners
        </h3>
        <ul className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
          {AFFILIATE_PROGRAMS.map((prog, idx) => (
            <li key={idx}>
              <a href={prog.url} className="block text-sm text-gray-600 dark:text-gray-400 hover:text-pink-500 hover:underline">
                <i className="fa-solid fa-check text-green-500 mr-2 text-xs"></i>
                {prog.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Simulated AdSense Block */}
      <div className="w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-400 text-sm">
        Google AdSense Space
      </div>
    </div>
  );
};

export default Sidebar;