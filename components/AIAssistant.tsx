import React, { useState, useRef, useEffect } from 'react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'bot', text: string}[]>([
    { sender: 'bot', text: 'Hi! I\'m Cabadokas AI. Ask me about beauty tips, weight loss, or how to make money online!' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "That's an interesting topic! Check out our blog for detailed articles.";
      if (userMsg.toLowerCase().includes('money') || userMsg.toLowerCase().includes('work')) {
        botResponse = "We have great resources on 'Work from Home' and affiliate marketing in our tools section.";
      } else if (userMsg.toLowerCase().includes('skin') || userMsg.toLowerCase().includes('beauty')) {
        botResponse = "For skincare, hydration is key! I recommend checking our latest post on 2025 Skincare Tips.";
      } else if (userMsg.toLowerCase().includes('weight') || userMsg.toLowerCase().includes('diet')) {
        botResponse = "Weight loss is a journey. Have you tried our Keto guide? It's very popular.";
      }
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition animate-bounce"
        >
          <i className="fa-solid fa-robot text-2xl"></i>
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-gray-800 w-80 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 text-white flex justify-between items-center">
            <h3 className="font-bold flex items-center"><i className="fa-solid fa-robot mr-2"></i> Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200"><i className="fa-solid fa-times"></i></button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${msg.sender === 'user' ? 'bg-pink-600 text-white rounded-br-none' : 'bg-white dark:bg-gray-700 dark:text-gray-200 shadow rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-white dark:bg-gray-800 border-t dark:border-gray-700 flex">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-l-lg px-3 py-2 text-sm outline-none"
            />
            <button 
              onClick={handleSend}
              className="bg-pink-600 text-white px-4 rounded-r-lg hover:bg-pink-700 transition"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;