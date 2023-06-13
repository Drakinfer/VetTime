import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/login/Login';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </Router>
    
);
