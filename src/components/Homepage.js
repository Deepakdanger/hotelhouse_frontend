import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className="homepage">
    <Link to="/login">
      <button type="button" className="slide1 homepage_login">LOGIN</button>
    </Link>
    <Link to="/signup">
      <button type="button" className="slide1 homepage_signup">SIGN UP</button>
    </Link>
    <div className="homepage_house">
      Search Houses &rarr;
    </div>
  </div>
);

export default Homepage;
