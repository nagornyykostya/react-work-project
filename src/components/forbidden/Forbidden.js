import React from 'react';
import './Forbidden.css';
import iconWarning from './attention.png'

function Forbidden() {
    return (
        <div className="forbidden-container">
            <div className="forbidden-message" >
                <img src={iconWarning} alt="warning" />
                    <h1>403 Forbidden</h1>
                    <div>You do not have access to this page</div>
            </div>
        </div>
    )
}

export default Forbidden;