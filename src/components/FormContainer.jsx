import React from 'react';
import '../stylesheets/FormContainer.css';
import Button from '../components/Button.jsx';

function FormContainer(){
    return(
        <form className = 'form' >
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
            <Button type = 'submit' text='LOGIN' />
        </form>
    
    );
    
}

export default FormContainer;

