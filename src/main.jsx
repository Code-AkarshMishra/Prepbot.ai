// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Hum yeh file banayenge
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

// Clerk Publishable Key ko .env file se import karein
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key. Please set VITE_CLERK_PUBLISHABLE_KEY in .env");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);