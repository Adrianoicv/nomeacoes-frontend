import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Matches from './pages/Matches';
import TotaisCod from './pages/TotaisCod';
import TotaisNucleo from './pages/TotaisNucleo.jsx';
import TotaisCategoria from './pages/TotaisCategoria.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/totais/arbitro" element={<TotaisCod />} />
      <Route path="/totais/nucleo" element={<TotaisNucleo />} />
      <Route path="/totais/categoria" element={<TotaisCategoria />} />
    </Routes>
  </BrowserRouter>
);
