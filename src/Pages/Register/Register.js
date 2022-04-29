import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [userx, loadingx, errorx] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [signInWithGoogle, user2, loading1, error2] = useSignInWithGoogle(auth);
    if (error1 || error2) {
        setError(error1, error2)
    }

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setEmail(e.target.value)
        } else {
            setError('Invalid Email')
        }

    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setPassword(e.target.value)
        } else {
            setError('Password should contain six character')
        }
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }
    const handleGoogleSignUp = () => {
        signInWithGoogle()
    }
    if (userx) {
        navigate('/')
    }
    console.log(user, user2)
    return (
        <div>
            <>
                <div className='login-container'>
                    <div className="login-box">
                        <form onSubmit={handleSignUp} className='login-form'>
                            <input className='input-field' type="text" name="name" placeholder='Enter Your Full Name' id="" />
                            <input onChange={handleEmailChange} className='input-field' type="email" name="email" placeholder='Enter Your Email' id="" required />
                            <input onChange={handlePasswordChange} className='input-field' type="password" name="password" placeholder='Enter Your Password' id="" required />
                            <Link className='login-link' to='/login'>Already have account?</Link>
                            <input className='login-btn' type="submit" value="Sing Up" />
                            <div className='partition'>
                                <div></div>
                                <p>or</p>
                                <div></div>
                            </div>
                            <button onClick={handleGoogleSignUp} className='google-login'>
                                Continue with google
                            </button>
                        </form>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Register;