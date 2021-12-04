import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
    <div>
      <Link to="/login">
        <span className="navhome">LOGIN</span>
      </Link>
      <Link to="/signup">
        <span className="navapp">SIGN UP</span>
      </Link>
    </div>  
);

export default Homepage;