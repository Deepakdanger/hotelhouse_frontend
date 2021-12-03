import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div>
      <Link to="/favourite">
        <span className="navhome">Favourite</span>
      </Link>
      <Link to="/">
        <span className="navapp">Sign Out</span>
      </Link>
    </div>  
);

export default Navbar;