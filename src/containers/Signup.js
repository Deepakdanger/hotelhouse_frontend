import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';
import { setErrorSigninAction } from '../actions';

const Signup = () => {
    const [state, setState] = useState({ name: '', user: '', password: '' });
    const { error_signin } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setState({ ...state, name: e.target.value });
    };

    const handleUserChange = (e) => {
        setState({ ...state, user: e.target.value });
    };
    
    const handlePassChange = (e) => {
        setState({ ...state, password: e.target.value });
    };

    const url = 'http://localhost:3000/users';

    const authenticate = (data) =>{
      if(data.check){
        navigate('/');
      }else{
        dispatch(setErrorSigninAction(data.error));
      }
    };

    const handleSubmit = (e) => {
        e.preventDefault();      
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                "name": state.name,
                "email": state.user,
                "password": state.password,
            }),
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
              authenticate(data);
            },
            (error) => {console.log(error)});
    };


  return (
    <div className="login_page">
      <div className="login_new"> SIGN UP </div>
      <p>{ error_signin[0] }</p>
      <p>{ error_signin[1] }</p>
      <p>{ error_signin[2] }</p>
      <p>{ error_signin[3] }</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="input_name" type="text" id="title" placeholder="Name" value={state.name} onChange={(e) => handleNameChange(e)} />
        <input className="input_user" type="text" id="title" placeholder="UserName" value={state.user} onChange={(e) => handleUserChange(e)} />
        <input className="input_password" type="text" id="title" placeholder="Password" value={state.password} onChange={(e) => handlePassChange(e)} />
        <button className="submit_login" type="submit">Submit</button>
      </form>
      <Link to="/home">
      <div className="signup_back_home"> BACK </div>
      </Link>
      <Link to="/login">
      <div className="sign_up_login"> LOG IN </div>
      </Link>
    </div>    
  );
};

export default Signup;