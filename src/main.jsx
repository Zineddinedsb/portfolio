import { StrictMode } from 'react'; // Importe le mode strict de React
import { createRoot } from 'react-dom/client'; // Importe createRoot pour le rendu
import './index.css'; // Importe le fichier CSS pour les styles globaux
import App from './App.jsx'; // Importe le composant principal App

// Crée une racine pour le rendu
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);