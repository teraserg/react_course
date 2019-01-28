import React, { Component }  from 'react';
import PropTypes from "prop-types";


class BlogStreamPager extends Component {

    render() {
        return (
            <div className="pager">
                <a className="pager-btn" >← Newer</a>
                <a className="pager-btn" >Older →</a>
            </div>
        );
    }
}

class BlogStream extends Component {

    static propTypes = {
        blogItemsData: PropTypes.array.isRequired
    };

    static defaultProps = {
        blogItemsData: []
    };

   renderBlogItems(){

        return this.props.blogItemsData.map(item => (
          <article className="blog-item">
                <h2><a href="#">{item.article_name}</a></h2>
                <p className="author">by {item.author}</p>
                <p className="date-posted">Posted on {item.date_posted}</p>
                <hr />
                <p className="blog-article">{item.text}</p>
                <button className="read-more-btn">Read more ></button>
                <hr />
            </article>
        ));
   }

   render() {
       return (
            <div className="blog-stream">
                <h1>Keep It Simple <small>Welcome</small></h1>
                <div className="blog-items">{this.renderBlogItems()}</div>
                <BlogStreamPager />
             </div>
       );
   }
}


export default BlogStream;
