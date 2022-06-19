import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/FormContainer.css';
import Button from '../components/Button.jsx';

function FormContainer(){

    const navigate = useNavigate();

    return(
        <form className = 'login-form' >
            <div>
                    <input 
                        type= 'text' 
                        id='name' 
                        name='name' 
                        placeholder = 'username'
                    />
            </div>

            <div>
                    <input 
                        type = 'email' 
                        id='name' 
                        name='name' 
                        placeholder = 'email'
                    /> 
            </div>
            <div className = 'button-container'>
                <Button 
                type = 'submit' 
                text='LOGIN' 
                onClick={() => navigate("/")}/>
            </div>
        </form>
    
    );
    
}

export default FormContainer;

