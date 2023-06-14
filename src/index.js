import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/login/Login';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import FormCabinet from './components/form-infos-cabinet/Formcabinet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/infocabinet" element={<FormCabinet/>}/>
    </Routes>
  </Router>
    
);
