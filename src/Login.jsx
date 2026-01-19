import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{ }, dispatch] = useStateValue();

    const signIn = e => {
        e.preventDefault();

        // Simulate Firebase/DB Login
        if (email && password) {
            dispatch({
                type: 'SET_USER',
                user: { email: email }
            })
            navigate('/');
        }
    }

    const register = e => {
        e.preventDefault();

        // Simulate Firebase/DB Register
        if (email && password) {
            dispatch({
                type: 'SET_USER',
                user: { email: email }
            })
            navigate('/');
        }
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={`${import.meta.env.BASE_URL}logo.png`}
                />
                {/* Note: In a real rebrand we'd use the AK logo here too, but keeping amazon style for structure */}
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AK Student Store Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your AK Account</button>
            </div>
        </div>
    )
}

export default Login;
