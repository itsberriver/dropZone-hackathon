import React from 'react';
import FormContainer from '../components/FormContainer.jsx';
import '../stylesheets/Login.css';


function Login (){
    return( 
        <>
            <section className='login-container'>
                <FormContainer/>  
                <p>Project for Barcelona Digital Talent Hackathon</p>       
            </section>
        </>

        
    );
}

export default Login;