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
    <div className="cover-page">
      Perfect Place to find
    </div>
    <div className="cover-page">
      home for yourself
    </div>
    <div className="cover-page">
      &amp; family.
    </div>
    <Link to="/signup">
      <div className="homepage_house">
        Search Houses &rarr;
      </div>
    </Link>
  </div>
);

export default Homepage;
