// src/components/ChatbotWidget.jsx

import React, { useState } from 'react';
import Chatbot from './Chatbot'; // Humara main chatbot component
import './ChatbotWidget.css'; // Is component ke liye CSS

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Jab widget band ho, sirf icon dikhayein
  if (!isOpen) {
    return (
      <button className="chat-icon-button" onClick={() => setIsOpen(true)}>
        🤖
      </button>
    );
  }

  // Jab widget khula ho, Chatbot aur Close button dikhayein
  return (
    <div className="chatbot-widget-open">
      <button className="chat-close-button" onClick={() => setIsOpen(false)}>
        &times; 
      </button>
      <Chatbot />
    </div>
  );
};

export default ChatbotWidget;