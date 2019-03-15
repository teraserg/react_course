import React, { Component } from 'react';
import queryString from 'query-string';
import SignUp from './SignUp'
import RightAside from './RightAside';
import BlogStream from './BlogStream';
import Navigation from './Navigation';
import BlogSearch from './BlogSearch'
import QuoteOfTheDay from './QuoteOfTheDay'
import Footer from './Footer';
import './App.css';


class HomePage extends Component {

    render() {

        const {page} = queryString.parse(this.props.location.search);
        const initialPage = page ? Number(page) : null;

        return (
            <div className="container">

                <Navigation showSignIn={true}/>

                <div className="main">
                    <BlogStream initialPage={initialPage}/>
                    <RightAside>
                        <BlogSearch />
                        <SignUp />
                        <QuoteOfTheDay />
                    </RightAside>
                </div>

                <Footer />

            </div>
        );
    }
}


export default HomePage;
