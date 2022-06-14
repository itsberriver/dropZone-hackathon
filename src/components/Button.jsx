import React from 'react';
import '../stylesheets/Button.css';

function Button({text, manageClick}){
    return(
        <button 
            className = 'button-component'
            onClick = {manageClick} >
            {text}
        </button>
    );
}

export default Button;