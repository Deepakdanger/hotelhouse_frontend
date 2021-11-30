import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [state, setState] = useState({ user: '', password: '' });

    const handleUserChange = (e) => {
        setState({ ...state, user: e.target.value });
    };
    
    const handlePassChange = (e) => {
        setState({ ...state, password: e.target.value });
    };

    const url = 'http://localhost:3000/authenticate';

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.user,state.password)
        console.log(e);        
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({
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
            console.log(data,'hello');
            },
            (error) => {console.log(error)});
      };


  return (
    <div className="login_page">
      <div className="login_new"> LOGIN </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="input_user" type="text" id="title" placeholder="UserName" value={state.user} onChange={(e) => handleUserChange(e)} />
        <input className="input_password" type="text" id="title" placeholder="Password" value={state.password} onChange={(e) => handlePassChange(e)} />
        <button className="submit_login" type="submit">Submit</button>
      </form>
      <Link to="/home">
      <div className="login_back_home"> BACK </div>
      </Link>
      <Link to="/signup">
      <div className="login_sign_up"> SIGN UP </div>
      </Link>
    </div>    
  );
};

export default Login;