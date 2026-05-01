import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send } from 'lucide-react';

const mockMessages = [
  { id: 1, sender: 'bot', text: "Hi 👋 I'm InovX AI. How can I help you today?" },
  { id: 2, sender: 'user', text: "I need an AI solution for my business" },
  { id: 3, sender: 'bot', text: "Great! We can help you with automation, analytics, and AI chat systems." },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Load mock messages with a slight delay for realism when opening
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const loadMessages = async () => {
        for (let i = 0; i < mockMessages.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 600));
          setMessages((prev) => [...prev, mockMessages[i]]);
        }
      };
      loadMessages();
    }
  }, [isOpen]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), sender: 'user', text: inputValue };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');

    // Mock bot reply
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Thanks for sharing! Our team will get back to you with a tailored AI solution soon.",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-4 w-80 h-[420px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-medium text-sm">InovX AI</span>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    msg.sender === 'user'
                      ? 'bg-white/10 text-white self-end rounded-br-sm'
                      : 'bg-white/[0.05] text-white/90 self-start rounded-bl-sm border border-white/[0.05]'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 bg-white/[0.02]">
              <form
                onSubmit={handleSend}
                className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-full px-4 py-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder:text-white/30"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="text-white/50 hover:text-white disabled:opacity-50 disabled:hover:text-white/50 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-white/20 transition-shadow"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} fill="currentColor" />}
      </motion.button>
    </div>
  );
};
