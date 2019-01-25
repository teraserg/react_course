import React, { Component } from 'react';


class Navigation extends Component {
   render() {
    return (
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
     );
   }
}


export default Navigation;
