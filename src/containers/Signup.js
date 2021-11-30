import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [state, setState] = useState({ name: '', user: '', password: '' });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.name,state.user,state.password)
        console.log(e);        
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                "name": state.name,
                "email": state.user,
                "password_digest": state.password,
            }),
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
            console.log(data,'signup');
            },
            (error) => {console.log(error)});
    };


  return (
    <div className="login_page">
      <div className="login_new"> SIGN UP </div>
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