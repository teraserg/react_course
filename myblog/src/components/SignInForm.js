import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';


class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePwd = this.handlePwd.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
    }

    state = {username: '', password: ''}

    handleSubmit(event) {
        event.preventDefault();
        this.props.signInRequest(this.state.username, this.state.password);
    }

    handleUserName(e) {
        e.preventDefault();
        this.setState({'username': e.target.value});
    }

    handlePwd(e){
        e.preventDefault();
        this.setState({'password': e.target.value});
    }

    handleSignOut = (e) => {e.preventDefault(); this.props.signOut();}

    render() {

        const signedElement = (

            <div className='sign-in-form'>
                <h4>Welcome {this.props.account.userName} ({this.props.account.role})</h4>
                <div id="nav-group-right">
                    <button onClick={this.handleSignOut} className="common-btn">Sign Out</button>
                </div>
            </div>
        );

        return (
            <div className="aside-item">

                {this.props.account.signed ? signedElement : (

                    <form onSubmit={this.handleSubmit} autoComplete="off">

                        <div className='sign-in-form'>
                            <input onChange={this.handleUserName}
                             name='inputUserName' className="input-window-base" required={true} placeholder="Username"/>
                            <input onChange={this.handlePwd} type='password'
                             name='inputPassword' className="input-window-base" required={true} placeholder="Password"/>
                            <div>
                                <button id='signInButton' className="common-btn">Sign In</button>
                            </div>
                        </div>
                    </form> )}
            </div>
        );
    }
}

const mapStateToProps = ({account}) => ({account})

export default connect(mapStateToProps, actions)(SignInForm);
