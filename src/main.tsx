import React from 'react';
import ReactDOM from 'react-dom/client';

// DO NOT IMPORT WITH TSX EXTENSION
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
