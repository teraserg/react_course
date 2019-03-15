import React from 'react';
import Navigation from './Navigation';
import SignUp from './SignUp'
import QuoteOfTheDay from './QuoteOfTheDay'
import RightAside from './RightAside';
import Footer from './Footer';
import LeftSide from './LeftSide'
import SignInForm from './SignInForm'
import { Link } from "react-router-dom";
import './App.css';


const SignInPage = () => (
    <div className="container">
        <Navigation showSignIn={false}/>
        <div className="main">

            <LeftSide>
                <h1>Sign In</h1>
                <small>Need an account? <Link to='/signup'>Sign up</Link> free.
                   Your opinions and comments would be greatly appreciated.
                </small>
                <hr />
                <SignInForm />
                <hr />
                <small>
                    This is a private system.
                    Unauthorized access to or use of this system is strictly prohibited and tracked.
                    By continuing, you acknowledge your awareness of and concurrence with the acceptable use policy.
                    As you finish, you should sign out to protect yourself.
                </small>
            </LeftSide>

            <RightAside>
                <SignUp />
                <QuoteOfTheDay />
            </RightAside>

        </div>
        <Footer />
    </div>
);

export default SignInPage;
