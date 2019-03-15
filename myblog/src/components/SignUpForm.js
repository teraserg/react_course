import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

// TODO: learn redux-form

class SignUpForm extends Component {

    handleSubmit = event => {
        event.preventDefault();
        alert('A name was submitted: ' + document.getElementById('signUpEmail').value);
    }

    render() {
        return (
            <div className="aside-item">

                <p>Status: {this.props.account.status}</p>
                <form onSubmit={this.handleSubmit} autoComplete="off">

                    <div className='sign-in-form'>
                        <input id='signUpEmail' name='signUpEmail' className="input-window-base"
                               placeholder="Email"/>
                        <input id='signUpUserName' name='signUpUserName' className="input-window-base"
                               placeholder="Username"/>
                        <input id='signUpPwd' name='signUpPwd' className="input-window-base" placeholder="Password"/>
                        <input id='signUpPwdConfirm' name='signUpPwdConfirm'
                               className="input-window-base" placeholder="Confirm Password"/>
                        <div>
                            <button id='signInButton' className="common-btn">Sign Up</button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = ({account}) => ({account})

export default connect(mapStateToProps, actions)(SignUpForm);
