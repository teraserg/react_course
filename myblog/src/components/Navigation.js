import PropTypes from "prop-types";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import actions from '../actions';


class Navigation extends Component {

    static propTypes = {
        showSignIn: PropTypes.bool
    }

    static defaultProps = {
        showSignIn: true
    }

    handleSignOut = (e) => {e.preventDefault(); this.props.signOut();}

    render() {

        const signInElement = (<div id="nav-group-right">
                                   <Link to='/signin'>Sign In</Link>
                               </div>);

        const signOutElement = (<div id="nav-group-right">
                                    <button onClick={this.handleSignOut}>Sign Out</button>
                                </div>);

        return (
             <div className="nav-root">
                <nav className="navigator">
                    <div id="nav-group-left">
                        <Link to={`/?page=${this.props.articles.currentPage}`} className="bigger">Keep it simple blog</Link>
                        <a className="disabled" href="#news">About</a>
                        <a className="disabled" href="#contact">Contact</a>
                    </div>
                    { this.props.showSignIn && ( this.props.account.signed ? (signOutElement) : (signInElement) ) }
                </nav>
            </div>
        );
   }
}

const mapStateToProps = ({account, articles}) => ({account, articles});

export default connect(mapStateToProps, actions)(Navigation);
