import React from 'react';
import '../stylesheets/FormContainer.css';
import Button from '../components/Button.jsx';

function FormContainer(){
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
                <Button type = 'submit' text='LOGIN' />
            </div>
        </form>
    
    );
    
}

export default FormContainer;

