import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New version available. Refresh now?')) {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
