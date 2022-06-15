import React from 'react';
import '../stylesheets/LoginButton.css';
import GoogleLogo from '../images/googleLogo.png'


function LoginButton ({ text, handleOpenPicker }){
    return(
        <button 
            className = 'login-button' 
            onClick = {()=>handleOpenPicker()}>
            <img 
                className = 'google-logo'
                src = {GoogleLogo} 
                alt = 'google logo' /> 
            {text}
        </button>
    );
}

export default LoginButton;