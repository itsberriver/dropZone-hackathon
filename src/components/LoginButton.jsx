import React from 'react';
import '../stylesheets/LoginButton.css';
import GoogleLogo from '../images/googleLogo.png'


function LoginButton ({ text, loginClick }){
    return(
        <button 
            className = 'login-button' 
            onClick = {loginClick}>
            <img 
                className = 'google-logo'
                src = {GoogleLogo} 
                alt = 'google logo' /> 
            {text}
        </button>
    );
}

export default LoginButton;