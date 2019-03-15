import React, { Component } from 'react';
import './App.css';


class BlogSearch extends Component {
   render() {
    return (
         <div className="aside-item">
            <h4>Blog Search</h4>
            <form autoComplete="off">
                <div className="input-group">
                    <input className="input-window" />
                    <button className="input-btn" type="submit">&#x261B;</button>
                </div>
            </form>
        </div>
     );
   }
}


class SignUp extends Component {
   render() {
    return (
         <div className="aside-item">
            <h4>Need an account?</h4>
            <p><a href="#">Sign up</a> free</p>
         </div>
     );
   }
}


class QuoteOfTheDay extends Component {
   render() {
    return (
         <div className="aside-item">
            <h4>Quote of the Day</h4>
            <q>Simplicity and elegance are unpopular because they
                require hard work and discipline to achieve and
                education to be appreciated. <i>— Edsger W. Dijkstra</i>
            </q>
        </div>
     );
   }
}


class RightAside extends Component {

  render() {
    return (
        <aside className="right-aside">
            <BlogSearch />
            <SignUp />
            <QuoteOfTheDay />
        </aside>
    );
  }
}

export default RightAside;
