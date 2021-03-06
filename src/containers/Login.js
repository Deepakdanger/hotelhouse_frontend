import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentTokenAction, setErrorLoginAction } from '../actions';
import { loginApi } from '../API';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, usePassword] = useState('');
  const { errormessage } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePassChange = (e) => {
    usePassword(e.target.value);
  };

  const authenticate = (data) => {
    if (data.auth_token) {
      localStorage.setItem('token', data.auth_token);
      dispatch(setCurrentTokenAction(data.auth_token));
      navigate('/app');
      alert.success('Successfully login');
    } else if (data.error.user_authentication) {
      dispatch(setErrorLoginAction(data.error.user_authentication));
      alert.error('OOPS !');
    } else {
      dispatch(setErrorLoginAction(data.error));
      alert.error('OOPS !');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginApi(user, password)
      .then((data) => {
        authenticate(data);
      });
  };

  return (
    <div className="login_page">
      LOGIN
      <div className="login_block">
        <div className="login_new"> LOGIN </div>
        <span className="login_error">{errormessage}</span>
        <form className="col" onSubmit={(e) => handleSubmit(e)}>
          E-mail:
          <input className="input_user" type="text" id="title" placeholder="Email" value={user} onChange={(e) => handleUserChange(e)} />
          Password:
          <input className="input_password" type="text" id="title" placeholder="Password" value={password} onChange={(e) => handlePassChange(e)} />
          <button className="submit_login" type="submit">Log in</button>
        </form>
        <div className="backpage">
          <Link to="/">
            <div className="backpage1">&larr; BACK TO HOME </div>
          </Link>
          <Link to="/signup">
            <div className="login_sign_up"> SIGN UP &rarr;</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
