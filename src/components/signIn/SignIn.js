import React, { useState } from 'react';
import './SignIn.css';

export function SignIn() {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div className="signin-container">
            <h1>Welcome</h1>
            <form className="signin-form" onSubmit={handleSubmit}>
                <input className="input-email" type="email" placeholder="Email address" value={email} onChange={handleChange}></input>
                <button className="button-submit" type="submit" value="Submit">Next</button>
            </form>
        </div>
    )
};
