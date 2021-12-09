import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Favourite from './containers/Favourite';
import Housedetails from './containers/Housedetails';
import Homepage from './components/Homepage';
import Navbarr from './containers/Navbarr';

const Routers = () => (
  <BrowserRouter>
    <Navbarr />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/" element={<Signup />} />
      <Route path="/app/" element={<App />} />
      <Route exact path="/favourite/" element={<Favourite />} />
      <Route path="/houses/" element={<Housedetails />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
