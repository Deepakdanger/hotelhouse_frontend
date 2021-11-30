import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div>
      <Link to="/">
        <span className="navhome">Home</span>
      </Link>
      <Link to="/app">
        <span className="navapp">App</span>
      </Link>
      <Link to="/login">
        <span className="navapp">Login</span>
      </Link>
    </div>  
);

export default Navbar;