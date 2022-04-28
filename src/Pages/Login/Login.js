import { } from '@fortawesome/react-fontawesome';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);




    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setEmail(e.target.value)
        } else {
            setError('Invalid Email')
        }
    }

    const handlPasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if(validPassword){
            setPassword(e.target.value)
        }else{
            setError('Password should contain six character')
        }
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <>
            <div className='login-container'>
                <div className="login-box">
                    <form onSubmit={handleLogin} className='login-form'>
                        <input onChange={handleEmailChange} className='input-field' type="email" name="email" placeholder='Enter Your Email' id="" />
                        <input onChange={handlPasswordChange} className='input-field' type="password" name="password" placeholder='Enter Your Password' id="" />
                        <Link className='login-link' to='/register'>Register account</Link>
                        <input className='login-btn' type="submit" value="LOGIN" />
                        <div className='partition'>
                            <div></div>
                            <p>or</p>
                            <div></div>
                        </div>
                        <button className='google-login'>
                            Continue with google
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;