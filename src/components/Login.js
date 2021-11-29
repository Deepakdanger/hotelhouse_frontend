import React, { useState } from 'react';

const Login = () => {
    const [state, setState] = useState({ user: '', password: '' });

    const handleUserChange = (e) => {
        setState({ ...state, user: e.target.value });
    };
    
    const handlePassChange = (e) => {
        setState({ ...state, password: e.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        console.log(e);
      };


  return (
    <div className="login_page">
      <div className="login_new"> LOGIN </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="input_user" type="text" id="title" placeholder="UserName" value={state.title} onChange={(e) => handleUserChange(e)} />
        <input className="input_password" type="text" id="title" placeholder="Password" value={state.title} onChange={(e) => handlePassChange(e)} />
        <button className="submit_login" type="submit">Submit</button>
      </form>
    </div>    
  );
};

export default Login;