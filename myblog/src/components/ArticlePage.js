import PropTypes from "prop-types";
import React, { Component } from 'react';
import Navigation from './Navigation';
import QuoteOfTheDay from './QuoteOfTheDay'
import RightAside from './RightAside';
import Footer from './Footer';
import LeftSide from './LeftSide'
import { connect } from 'react-redux';
import actions from '../actions';
import CommentForm from './CommentForm'
import Comments from './Comments'
import './App.css';

class ArticlePage extends Component {

    static propTypes = {
        fullArticle: PropTypes.object.isRequired
    };

    static defaultProps = {
        fullArticle: {}
    };

    componentDidMount() {
        if (this.props.fullArticle.id === Number(this.props.match.params.articleId))
            return;
        this.props.getFullArticle(this.props.match.params.articleId);
        this.props.getComments(this.props.match.params.articleId);
    }

    render() {

        const article = this.props.fullArticle;


        const articleItem = article.title ? (
            <article key={article.id} className="blog-item">
                <h2>{article.title}</h2>
                <p className="author">by {article.author}</p>
                <hr />
                <p className="date-posted">Posted on {article.date_posted}</p>
                <hr />
                <p className="blog-article">{article.content}</p>

                <hr />

                <CommentForm />

                <hr />

                <Comments />
            </article>) : <h2>Article {this.props.match.params.articleId} not found</h2>;

        return (
            <div className="container">
                <Navigation showSignIn={true}/>
                <div className="main">

                    <LeftSide>
                        {articleItem}
                    </LeftSide>

                    <RightAside>
                        <QuoteOfTheDay />
                    </RightAside>

                </div>
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = ({fullArticle, account}) => ({fullArticle, account});

export default connect(mapStateToProps, actions)(ArticlePage);
