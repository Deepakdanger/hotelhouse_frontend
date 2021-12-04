import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentTokenAction, setErrorLoginAction } from '../actions';

const Login = () => {
  const [state, setState] = useState({ user: '', password: '' });
  const { errormessage } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setState({ ...state, user: e.target.value });
  };

  const handlePassChange = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const url = 'http://localhost:3000/authenticate';

  const authenticate = (data) => {
    if (data.auth_token) {
      localStorage.setItem('token', data.auth_token);
      dispatch(setCurrentTokenAction(data.auth_token));
      navigate('/app');
    } else if (data.error.user_authentication) {
      dispatch(setErrorLoginAction(data.error.user_authentication));
    } else {
      dispatch(setErrorLoginAction(data.error));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: state.user,
        password: state.password,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        authenticate(data);
      },
      () => {});
  };

  return (
    <div className="login_page">
      LOGIN
      <div className="login_block">
        <div className="login_new"> LOGIN </div>
        <span className="login_error">{errormessage}</span>
        <form className="col" onSubmit={(e) => handleSubmit(e)}>
          E - mail :-
          <input className="input_user" type="text" id="title" placeholder="UserName" value={state.user} onChange={(e) => handleUserChange(e)} />
          Password:-
          <input className="input_password" type="text" id="title" placeholder="Password" value={state.password} onChange={(e) => handlePassChange(e)} />
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
