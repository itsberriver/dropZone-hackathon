import React from 'react';
import '../stylesheets/LoginButton.css';
import googleLogo from '../images/googleLogo.png'


function LoginButton (text,loginClick,logo){
    return(
        <button 
            className = 'login-button'
            onClick = {loginClick} 
            text = { text }
            logo = { googleLogo }/>
    );
}

export default LoginButton;