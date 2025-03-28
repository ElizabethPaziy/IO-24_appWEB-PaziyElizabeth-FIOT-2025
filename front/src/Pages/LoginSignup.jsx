import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>sign up</h1>
                <div className="login-signup-fields">
                    <input type="text" placeholder='your name'/>
                    <input type="email" placeholder='email address'/>
                    <input type="password" placeholder='password'/>
                </div>
                <button>continue</button>
                <p className="login-signup-login">
                    already have an account? <span>login here</span>
                </p>
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>by continuing, i agree with terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup
