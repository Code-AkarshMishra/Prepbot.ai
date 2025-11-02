import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { useUser } from '@clerk/clerk-react'; 

const Chatbot = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const messagesEndRef = useRef(null);

  // Pehla message user ke login status ke hisaab se set karein
  useEffect(() => {
    if (isLoaded) {
      const welcomeText = isSignedIn 
        ? `Hi ${user.firstName}! I am your AI mentor. Ask me any study-related doubt.`
        : 'Hello! I am PrepBot, your site guide. Ask me how to use this site.';
      setMessages([{ from: 'bot', text: welcomeText }]);
    }
  }, [isLoaded, isSignedIn, user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !isLoaded || isLoading) return;

    const userMessage = { from: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // "Typing..." jaisa effect
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: '...' }]);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 300);

    try {
      // Apne backend server ko call karein
      const response = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.text,
          isSignedIn: isSignedIn,
          userName: isSignedIn ? user.firstName : 'Guest',
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botReply = data.reply;

      // "..." ko real response se replace karein
      setMessages((prev) => {
        const newMessages = [...prev];
        const typingMessageIndex = newMessages.findLastIndex(msg => msg.from === 'bot' && msg.text === '...');
        
        if (typingMessageIndex !== -1) {
            newMessages[typingMessageIndex] = { from: 'bot', text: botReply };
        } else {
            newMessages.push({ from: 'bot', text: botReply });
        }
        return newMessages;
      });

    } catch (error) {
      console.error('Error fetching from backend:', error);
      // "..." ko error message se replace karein
      setMessages((prev) => {
         const newMessages = [...prev];
         const typingMessageIndex = newMessages.findLastIndex(msg => msg.from === 'bot' && msg.text === '...');
         if (typingMessageIndex !== -1) {
            newMessages[typingMessageIndex] = { from: 'bot', text: 'Oops! Something went wrong.' };
         } else {
            newMessages.push({ from: 'bot', text: 'Oops! Something went wrong.' });
         }
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">PrepBot.AI Chatbot</div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-input-area">
        <input
          type="text"
          placeholder={isLoading ? "Thinking..." : "Type your message..."}
          value={input}
          onChange={(e) => setInput(e.target.value)} // <-- YEH TYPO FIX HO GAYA HAI
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading}>
          {isLoading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

