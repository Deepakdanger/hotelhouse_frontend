import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Routes >
      <Route exact path="/"  element={<Home />} />
      <Route path="/houses/"  element={<App />} />
      <Route path="/login/"  element={<Login />} />
    </Routes >
  </BrowserRouter>
);

export default Routers;
