import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from 'pages/Login';
import { Home } from 'pages/Home';
import { History } from 'pages/History';

import './App.css';
import "nes.css/css/nes.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
