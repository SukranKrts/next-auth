import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
