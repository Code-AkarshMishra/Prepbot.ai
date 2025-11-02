const express = require('express');
const cors = require('cors');
// Naya import
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const port = 3001;

// Google AI Setup
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint same rahega (React app ko koi change nahi karna padega)
app.post('/chat', async (req, res) => {
  const { message, isSignedIn, userName } = req.body;

  // Yahaan hum bot ki personality set karte hain
  let systemPrompt = '';

  if (isSignedIn) {
    // --- LOGGED IN (AI DOUBT BOT) ---
    systemPrompt = `You are "PrepBot," an expert AI mentor for a student named ${userName}. Be helpful, encouraging, and clear. You must answer all academic questions related to topics like Physics, Math, and Computer Science. Keep your answers concise and easy to understand.`;
  } else {
    // --- LOGGED OUT (SITE GUIDE BOT) ---
    systemPrompt = `You are "PrepBot Guide," a helpful assistant for the website PrepBot.AI. You MUST NOT answer any academic questions (like "what is physics"). Your ONLY job is to guide the user on how to use the website (e.g., "how to sign up," "what are the features"). If the user asks an academic question, politely tell them to log in first to access the AI Mentor.`;
  }

  try {
    // Model ko system prompt ke saath initialize karein
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash-preview-09-2025",
      systemInstruction: systemPrompt,
    });

    // Seedha user ka message bhej dein
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    // Jawaab wapas React app ko bhej dein
    res.json({
      reply: text
    });

  } catch (error) {
    console.error('Error connecting to Google AI:', error);
    res.status(500).json({ error: 'Failed to connect to AI. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`PrepBot server (using Google Gemini) http://localhost:${port} par chal raha hai`);
});
