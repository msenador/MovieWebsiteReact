import React from 'react';

const Login = () =>{
    return(
        <>
        Username:
        <input type='text' id='username-id' /><br /><br />
        Password:
        <input type='password' id='password-id' /><br /><br />
        <input type='button' value='Submit' id='submit-id' />
        </>
    )
}

export default Login;