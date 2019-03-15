import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Link } from "react-router-dom";


class CommentForm extends Component {

    state = { comment: '' }

    handleCommentChange = (e) => {
        e.preventDefault();
        this.setState({comment: e.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postComment(this.props.fullArticle.id,
                               this.props.account.userName,
                               this.state.comment,
                               this.props.account.token);
        this.setState({comment: ''});
    }

    render() {

        const postComment = (<div>
                              <textarea value={this.state.comment} onChange={this.handleCommentChange} />
                              <button className="common-btn">Post</button>
                             </div>);
        const signIn = <small><Link to='/signin'>Sign in</Link>, please. New comments are held for moderation.</small>;

        return (
            <div className="aside-item">
                <h4>Leave a Comment:</h4>
                <form onSubmit={this.handleSubmit} autoComplete="off">

                    <div className='sign-in-form'>
                        {this.props.account.signed ? postComment : signIn}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({account, fullArticle}) => ({account, fullArticle})

export default connect(mapStateToProps, actions)(CommentForm);
