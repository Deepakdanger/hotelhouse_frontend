import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { Link, useNavigate } from 'react-router-dom';
import { setErrorSignupAction } from '../actions';
import { signinApi } from '../API';

const Signup = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, usePassword] = useState('');
  const { errorsignup } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePassChange = (e) => {
    usePassword(e.target.value);
  };

  const authenticate = (data) => {
    if (data.check) {
      navigate('/login');
      alert.success('Succesful Sign-Up');
    } else {
      dispatch(setErrorSignupAction(data.error));
      alert.error('OOPS !');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signinApi(name, user, password)
      .then((data) => {
        authenticate(data);
      });
  };

  return (
    <div className="login_page">
      LOGIN
      <div className="login_block">
        <div className="login_new"> SIGN UP </div>
        <div className="login_error">
          <p>{ errorsignup[0] }</p>
          <p>{ errorsignup[1] }</p>
          <p>{ errorsignup[2] }</p>
          <p>{ errorsignup[3] }</p>
        </div>
        <form className="col" onSubmit={(e) => handleSubmit(e)}>
          Username:
          <input className="input_name" type="text" id="title" placeholder="UserName" value={name} onChange={(e) => handleNameChange(e)} />
          EmailId:
          <input className="input_user" type="text" id="title" placeholder="E-mail" value={user} onChange={(e) => handleUserChange(e)} />
          Password:
          <input className="input_password" type="text" id="title" placeholder="Password" value={password} onChange={(e) => handlePassChange(e)} />
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
