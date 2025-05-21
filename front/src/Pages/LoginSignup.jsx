import React, {useState} from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {

    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    })
    const changeHandler = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const login = async () => {
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/")
        }
        else{
            alert(responseData.errors)
        }
    }
    const signup = async () => {
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/")
        }
        else{
            alert(responseData.errors)
        }
    }
    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>{state}</h1>
                <div className="login-signup-fields">
                    {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='your name'/> : <></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder='email address'/>
                    <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder='password'/>
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>continue</button>
                {state === "Sign Up" ? <p className="login-signup-login">
                    already have an account? <span onClick={()=>{setState("Login")}}>login here</span>
                </p> : <p className="login-signup-login">
                    create an account? <span onClick={()=>{setState("Sign Up")}}>click here</span>
                </p>}
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>by continuing, i agree with terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup
