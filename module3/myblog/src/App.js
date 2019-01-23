import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RightAside from './RightAside';
import BlogStream from './BlogStream';


class App extends Component {

  render() {

    return (
      <div className="container">

        <div className="nav-root">
            <nav className="navigator">
                <div id="nav-group-left">
                    <a href="#home">Keep it simple blog</a>
                    <a className="disabled" href="#news">About</a>
                    <a className="disabled" href="#contact">Contact</a>
                </div>
                <div id="nav-group-right">
                    <a href="#signin">Sign In</a>
                </div>
            </nav>
        </div>

        <div className="main">
            <BlogStream />
            <RightAside />
        </div>

        <footer className="footer">
            <hr />
            <p>Copyright © Keep It Simple Blog 2018</p>
        </footer>
    </div>
    );
  }
}

export default App;
