import React from 'react';
import './Forbidden.css';
import iconWarning from './attention.png'

export const Forbidden = () => (
    <div className="forbidden-container">
        <section className="forbidden-message" >
            <img src={iconWarning} alt="warning" />
            <h1>403 Forbidden</h1>
            <p>You do not have access to this page</p>
        </section>
    </div>
)