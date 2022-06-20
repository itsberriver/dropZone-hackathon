import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/FormContainer.css';
import Picprofile from '../images/picprofile.png';

function FormContainer(){

    const navigate = useNavigate();

    return(
        <form className = 'login-form' >
            <img
				className = 'profile-image'
				src = {Picprofile}
				alt = 'Picprofile'/>
            <div className = 'input-username'>
                    <input 
                        type= 'text' 
                        id='name' 
                        name='name' 
                        placeholder = 'username'
                    />
            </div>

            <div className = 'input-username'>
                    <input 
                        type = 'email' 
                        id='name' 
                        name='name' 
                        placeholder = 'email'
                    /> 
            </div>
                <button 
                className = 'login-button-container'
                type='submit' 
                onClick={() => navigate("/home")}>
                Login
                </button>
        </form>
    
    );
    
}

export default FormContainer;

