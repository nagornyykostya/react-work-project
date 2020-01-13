import React from 'react';
import './SignIn.css';

export const SignIn = () => (
    <div className="signin-container">
        <h1>Welcome</h1>
        <form className="signin-form">
            <input className="input-email" type="email" placeholder="Email address"></input>
            <button className="button-submit" type="submit">Next</button>
        </form>
    </div>
);