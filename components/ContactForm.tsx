import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate network delay and auto-reply
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Get in Touch</h2>
      <p className="text-center text-gray-500 mb-8">Questions about partnerships, affiliates, or our community?</p>

      {status === 'success' ? (
        <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center animate-fade-in">
          <i className="fa-solid fa-check-circle text-4xl text-green-500 mb-4"></i>
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Message Sent!</h3>
          <p className="text-green-700 dark:text-green-300">
            Check your inbox. Our AI Auto-Responder has already sent you a confirmation and relevant affiliate resources.
          </p>
          <button 
            onClick={() => setStatus('idle')} 
            className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-pink-500 outline-none transition" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-pink-500 outline-none transition" placeholder="jane@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
             <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-pink-500 outline-none transition">
               <option>General Inquiry</option>
               <option>Affiliate Program</option>
               <option>Advertising</option>
               <option>Privacy Question</option>
             </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea required rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-pink-500 outline-none transition" placeholder="How can we help you?"></textarea>
          </div>
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition transform hover:scale-[1.01] flex justify-center items-center"
          >
            {status === 'sending' ? (
              <><i className="fa-solid fa-spinner fa-spin mr-2"></i> Sending...</>
            ) : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;