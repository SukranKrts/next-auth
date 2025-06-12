import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/user' element={<User />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
