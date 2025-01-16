// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Cambiar a '.jsx' si el archivo tiene esta extensión

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
