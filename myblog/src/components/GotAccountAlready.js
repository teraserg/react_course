import React from 'react';
import { Link } from "react-router-dom";

function GotAccountAlready() {
    return (
        <div className="aside-item">
            <h4>Got account already?</h4>
            <p><Link to='/signin'>Sign in</Link>, please.
            Your opinions and comments would be greatly appreciated.</p>
        </div>
    );
}

export default GotAccountAlready;
