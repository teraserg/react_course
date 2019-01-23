import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RightAside from './RightAside';
import BlogStream from './BlogStream';
import Navigation from './Navigation';


class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <hr />
            <p>Copyright © Keep It Simple Blog 2018</p>
        </footer>
    )
  }
}


class App extends Component {

  render() {

    return (
      <div className="container">

        <Navigation />

        <div className="main">
            <BlogStream />
            <RightAside />
        </div>

        <Footer />

    </div>
    );
  }
}

export default App;
