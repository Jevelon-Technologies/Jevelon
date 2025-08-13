import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'
import './utils/useMobile.ts' // Import to initialize error suppression

// Auto-recovery for white screen issue
window.addEventListener('load', () => {
  // If page doesn't load properly within 10 seconds, force reload
  setTimeout(() => {
    if (document.body.children.length === 0 || !document.getElementById('root')) {
      console.log('Page seems stuck, forcing reload');
      window.location.reload();
    }
  }, 10000);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)