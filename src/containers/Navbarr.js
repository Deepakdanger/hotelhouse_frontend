import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { FaStar, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Navbarr = () => {
  const [isTrue, setTrue] = useState(false);
  const alert = useAlert();
  const logout = () => {
    localStorage.setItem('token', '');
    setTrue(false);
  };

  const show = () => {
    if (localStorage.getItem('token') !== '') {
      setTrue(!isTrue);
    } else {
      alert.info('Please Sign-In');
    }
  };

  return (
    <nav>
      <div className="website-name">
        Perfect
      </div>
      <ul>
        <button className="hamburger-nav" type="button" onClick={() => show()}>
          <li>
            <div className="log-out-icon">
              <FaBars size="30" />
            </div>
          </li>
        </button>
        <Link to="/app">
          <li className={isTrue ? 'show-nav' : 'hide-nav'}>
            <div className="home-icon">
              <div className="roof">
                <div className="roof-edge" />
              </div>
              <div className="front" />
            </div>
          </li>
        </Link>
        <Link to="/favourite">
          <li className={isTrue ? 'show-nav nav-fav' : 'hide-nav nav-fav'}>
            <div className="log-out-icon">
              <FaStar size="30" />
            </div>
          </li>
        </Link>
        <Link to="/">
          <button className={isTrue ? 'show-nav logout-nav' : 'hide-nav logout-nav'} type="button" onClick={() => logout()}>
            <li className="logout-li partner">
              <div className="log-out-icon1">
                <FaSignOutAlt size="30" />
              </div>
            </li>
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbarr;
