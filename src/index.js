const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const port = 3001;

// Google AI Setup
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// --- Endpoint 1: Normal Chat (Pehle se hai) ---
app.post('/chat', async (req, res) => {
  const { message, isSignedIn, userName } = req.body;
  
  let systemPrompt = '';
  if (isSignedIn) {
    systemPrompt = `You are "PrepBot," an expert AI mentor...`; // (Aapka purana prompt)
  } else {
    systemPrompt = `You are "PrepBot Guide," a helpful assistant...`; // (Aapka purana prompt)
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash-preview-09-2025",
      systemInstruction: systemPrompt,
    });
    const result = await model.generateContent(message);
    const response = await result.response;
    res.json({ reply: response.text() });

  } catch (error) {
    console.error('Error connecting to Google AI:', error);
    res.status(500).json({ error: 'Failed to connect to AI.' });
  }
});

// --- Endpoint 2: Naya Quiz Generator ---
app.post('/generate-quiz', async (req, res) => {
  const { notes } = req.body; // Hum frontend se notes ka text bhejenge

  // Naya prompt jo AI ko JSON format mein quiz banane ke liye instruct karega
  const systemPrompt = `You are an expert quiz generation AI. Based on the following text, create a 5-question multiple-choice quiz. 
  
  IMPORTANT: You MUST format your response as a valid JSON array. Each object in the array must have exactly three keys: "question", "options" (which is an array of 4 strings), and "answer" (which is the string of the correct option).
  
  Do not include any text outside of the JSON array.
  
  Example format:
  [
    {
      "question": "What is 2+2?",
      "options": ["3", "4", "5", "6"],
      "answer": "4"
    },
    {
      "question": "What is the capital of France?",
      "options": ["London", "Berlin", "Paris", "Madrid"],
      "answer": "Paris"
    }
  ]
  `;
  
  // Naya safety setting (taaki AI JSON ko block na kare)
  const safetySettings = [
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_NONE",
    },
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "BLOCK_NONE",
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "BLOCK_NONE",
    },
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_NONE",
    },
  ];

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash-preview-09-2025",
      systemInstruction: systemPrompt,
      safetySettings: safetySettings // Nayi safety settings
    });

    // Hum notes ko prompt ke part ki tarah bhej rahe hain
    const result = await model.generateContent(`Here is the text to generate a quiz from: ${notes}`);
    const response = await result.response;
    
    // Gemini se mila JSON text
    const jsonText = response.text();
    
    // Hum JSON ko seedha frontend ko bhej denge
    res.json({
      quizJson: jsonText 
    });

  } catch (error) {
    console.error('Error generating quiz:', error);
    res.status(500).json({ error: 'Failed to generate quiz.' });
  }
});

app.listen(port, () => {
  console.log(`PrepBot server (with Quiz feature) http://localhost:${port} par chal raha hai`);
});