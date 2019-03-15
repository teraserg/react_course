import React, { Component } from 'react';
import LeftSide from "./LeftSide"
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import actions from '../actions';


class Comments extends Component {

    static propTypes = {
        fullArticle: PropTypes.object,
    };

    static defaultProps = {
        fullArticle: {comments: []}
    };

    handleDelComment = (commentId, e) => {
        e.preventDefault();
        this.props.deleteComment(this.props.fullArticle.id, commentId, this.props.account.token);
    }

    render() {

        const comments = this.props.fullArticle.comments.map((item) => (
              <div key={item.id} className="comments space_between">
                  <div className="comments">
                      <div><img alt='avatar' className="media-object" src={item.avatar} /></div>
                      <div>
                        <strong>{item.author}</strong> <small>{item.created_at}</small>
                        <div className="comment-text">{item.comment}</div>
                      </div>
                  </div>
                  {this.props.account.role === 'admin' &&
                   <div><button onClick={(e) => this.handleDelComment(item.id, e)}
                                className="common-btn">DEL</button></div>}
              </div>
            ));

        return (
            <LeftSide>
                <div className="blog-items">{comments}</div>
            </LeftSide>
        );
    }
}

const mapStateToProps = ({fullArticle, account}) => ({fullArticle, account})

export default connect(mapStateToProps, actions)(Comments);
