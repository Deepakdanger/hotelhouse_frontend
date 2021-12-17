import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { Link, useNavigate } from 'react-router-dom';
import { setErrorSigninAction } from '../actions';

const Signup = () => {
  const [state, setState] = useState({ name: '', user: '', password: '' });
  const { errorsignin } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const handleNameChange = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const handleUserChange = (e) => {
    setState({ ...state, user: e.target.value });
  };

  const handlePassChange = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const url = 'https://floating-harbor-48342.herokuapp.com/users';

  const authenticate = (data) => {
    if (data.check) {
      navigate('/login');
      alert.success('Succesful Sign-Up');
    } else {
      dispatch(setErrorSigninAction(data.error));
      alert.error('OOPS !');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: state.name,
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
        authenticate(data);
      },
      () => {});
  };

  return (
    <div className="login_page">
      LOGIN
      <div className="login_block">
        <div className="login_new"> SIGN UP </div>
        <div className="login_error">
          <p>{ errorsignin[0] }</p>
          <p>{ errorsignin[1] }</p>
          <p>{ errorsignin[2] }</p>
          <p>{ errorsignin[3] }</p>
        </div>
        <form className="col" onSubmit={(e) => handleSubmit(e)}>
          Username:
          <input className="input_name" type="text" id="title" placeholder="UserName" value={state.name} onChange={(e) => handleNameChange(e)} />
          EmailId:
          <input className="input_user" type="text" id="title" placeholder="E-mail" value={state.user} onChange={(e) => handleUserChange(e)} />
          Password:
          <input className="input_password" type="text" id="title" placeholder="Password" value={state.password} onChange={(e) => handlePassChange(e)} />
          <button className="submit_login" type="submit">Sign up</button>
        </form>
        <div className="backpage">
          <Link to="/">
            <div className="backpage1">&larr; BACK TO HOME </div>
          </Link>
          <Link to="/login">
            <div className="login_sign_up"> LOG IN  &rarr;</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
