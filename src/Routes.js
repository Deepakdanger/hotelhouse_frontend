import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import App from './components/App';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Favourite from './containers/Favourite';

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Routes >
      <Route exact path="/"  element={<Home />} />
      <Route exact path="/favourite" element={<Favourite />} />
      <Route path="/app/"  element={<App />} />
      <Route path="/login/"  element={<Login />} />
      <Route path="/signup/"  element={<Signup />} />
    </Routes >
  </BrowserRouter>
);

export default Routers;
