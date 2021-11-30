import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './containers/Signup';

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Routes >
      <Route exact path="/"  element={<Home />} />
      <Route path="/app/"  element={<App />} />
      <Route path="/login/"  element={<Login />} />
      <Route path="/signup/"  element={<Signup />} />
    </Routes >
  </BrowserRouter>
);

export default Routers;
