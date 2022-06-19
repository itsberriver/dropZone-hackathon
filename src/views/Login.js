import React from 'react';
import FormContainer from '../components/FormContainer.jsx';
import {FaArrowLeft} from 'react-icons/fa';
import '../stylesheets/Login.css';
import {Link} from 'react-router-dom';


function Login (){
    return( 
        <>
            <section className='login-container'>
                <FormContainer/>
                <p className ='unregistered-text'>unregistered?</p>

            <Link to='/register'>
                <p className ='register-here-text'>REGISTER HERE</p>
            </Link>

                

            <Link to='/home'>
            <FaArrowLeft className='arrow-icon'/>
            </Link>

            </section>
        </>

        
    );
}

export default Login;