import { } from '@fortawesome/react-fontawesome';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './login.css';
import auth from '../../firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => { 
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const from = location.state?.from?.pathname || '/';


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
    const resetPassword = async (e) => {
        const email = e.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('sent email')
        } else {
            toast('please enter your email address')
        }
    }
    const handleGoogleSignUp = () => {
        signInWithGoogle()
    }
    if (user || user2) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <p>Loading.....</p>
    }

    return (
        <>
            <div className='login-container'>
                <div className="login-box">
                    <form onSubmit={handleLogin} className='login-form'>
                        <input onChange={handleEmailChange} className='input-field' type="email" name="email" placeholder='Enter Your Email' id="" />
                        <input onChange={handlPasswordChange} className='input-field' type="password" name="password" placeholder='Enter Your Password' id="" />
                        <Link className='login-link' to='/register'>Register account</Link>
                        <p>Forget password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                        <input className='login-btn' type="submit" value="LOGIN" />
                        {error ? <p className='text-danger'>Firebase error</p> : ''}
                        <div className='partition'>
                            <div></div>
                            <p>or</p>
                            <div></div>
                        </div>
                        <button onClick={handleGoogleSignUp} className='google-login'>
                            Continue with google
                        </button>
                        <ToastContainer/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;