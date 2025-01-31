import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";  // ✅ HashRouter import karein

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>   {/* ✅ Sirf yahan Router use karein */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
