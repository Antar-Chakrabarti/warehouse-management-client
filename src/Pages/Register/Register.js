import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <>
                <div className='login-container'>
                    <div className="login-box">
                        <form className='login-form'>
                            <input className='input-field' type="text" name="name" placeholder='Enter Your Full Name' id="" />
                            <input className='input-field' type="email" name="email" placeholder='Enter Your Email' id="" />
                            <input className='input-field' type="password" name="password" placeholder='Enter Your Password' id="" />
                            <Link className='login-link' to='/login'>Already have account?</Link>
                            <input className='login-btn' type="submit" value="Sing Up" />
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
        </div>
    );
};

export default Register;