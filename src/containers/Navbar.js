import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const signout = () => {
    localStorage.setItem('token', '');
  };

  return (
    <div>
      <Link to="/app">
        <span className="navhome">Home</span>
      </Link>
      <Link to="/favourite">
        <span className="navhome">Favourite</span>
      </Link>
      <Link to="/">
        <span className="navapp" onClick={signout}>Sign Out</span>
      </Link>
    </div>

  );
};

export default Navbar;
