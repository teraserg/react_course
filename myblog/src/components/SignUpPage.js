import React from 'react';
import Navigation from './Navigation';
import QuoteOfTheDay from './QuoteOfTheDay'
import GotAccountAlready from './GotAccountAlready'
import RightAside from './RightAside';
import Footer from './Footer';
import LeftSide from './LeftSide'
import SignUpForm from './SignUpForm'
import { Link } from "react-router-dom";
import './App.css';


const SignUpPage = () => (
    <div className="container">
        <Navigation />
        <div className="main">

            <LeftSide>
                <h1>Sign Up</h1>
                <small>Already got an account? <Link to='/signin'>Sign in</Link>, please.</small>
                <hr />
                <SignUpForm />
                <hr />
                <div>
                    <small>This is a private system. Unauthorized access to or use of
                       this system is strictly prohibited and tracked.
                       By continuing, you acknowledge your awareness
                       of and concurrence with the acceptable use policy.
                    </small>
                    <p><small>As you finish, you should sign out to protect yourself.</small></p>
                </div>
            </LeftSide>

            <RightAside>
                <GotAccountAlready />
                <QuoteOfTheDay />
            </RightAside>

        </div>
        <Footer />
    </div>
);

export default SignUpPage;
