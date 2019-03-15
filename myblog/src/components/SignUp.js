import React from 'react';
import { Link } from "react-router-dom";


const SignUp = () =>
(
    <div className="aside-item">
        <h4>Need an account?</h4>
        <p><Link to='/signup'>Sign up</Link> free</p>
    </div>
)

export default SignUp;
