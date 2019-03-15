import React, { Component } from 'react';
import PropTypes from "prop-types";
import BlogStreamPager from "./BlogStreamPager"
import LeftSide from "./LeftSide"
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


class BlogStream extends Component {

    static propTypes = {
        articles: PropTypes.object,
        initialPage: PropTypes.number,
    };

    static defaultProps = {
        articles: {
            totalCount: 0,
            data: [],
        },
        initialPage: 1
    };

    renderBlogItems(){

        return this.props.articles.data.map((item) => (
          <article key={item.id} className="blog-item">
                <h2><Link to={`/post/${item.id}`}>{item.title}</Link></h2>
                <p className="author">by {item.author}</p>
                <p className="date-posted">Posted on {item.date_posted}</p>
                <hr />
                <p className="blog-article">{item.content}</p>
                <Link to={`/post/${item.id}`} className="common-btn">Read more ></Link>
                <hr />
          </article>
        ));
    }

    render() {
        return (
            <LeftSide>
                <h1>Keep It Simple <small>Welcome</small></h1>
                <div className="blog-items">{this.renderBlogItems()}</div>
                <BlogStreamPager initialPage={this.props.initialPage} />
            </LeftSide>
        );
    }
}

const mapStateToProps = ({articles}) => ({articles})

export default connect(mapStateToProps)(BlogStream);
