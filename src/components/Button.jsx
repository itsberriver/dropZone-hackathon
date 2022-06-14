import React from 'react';
import '../stylesheets/Button.css';

function Button(text){
    return(
        <button className = 'button-component'>
            {text}
        </button>
    );
}

export default Button;