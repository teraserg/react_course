import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import {restoreSignIn} from '../actions/account';
import { connect } from 'react-redux';
import './App.css';


class App extends React.Component {

  componentDidMount(){
      this.props.restoreSignIn();
  }

  render() {

    return (
        <Router>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/signin" component={SignInPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/post/:articleId" component={ArticlePage} />
            </div>
        </Router>);
    }
}


export default connect(null, {restoreSignIn})(App);
