import React, { Component } from 'react';
import './App.css';


const blogItemsDataStub = [
    {
        article_name: 'Blog article 1',
        text: 'Accusamus excepturi perspiciatis consequatur enim incidunt adipisci '+
              'rerum eos hic asperiores unde aliquid corrupti praesentium quibusdam ipsum doloribus ' +
              'consectetur assumenda officiis explicabo voluptatem. Unde tempora consequuntur ' +
              'temporibus perferendis aperiam minima, quas enim vitae labore est amet cum officia et...',
        author: 'John Smith',
        date_posted: 'September 07, 2015 at 01:51 PM',
    },
    {
        article_name: 'Accusamus',
        text: 'Perspiciatis autem a ipsum optio veniam cumque recusandae magnam '+
              'aperiam iusto veritatis iure doloribus assumenda reiciendis odit maiores blanditiis '+
              'quisquam possimus. Perspiciatis ratione incidunt perferendis optio veniam eum, accusamus' +
              'quae praesentium exercitationem voluptatibus voluptas sequi quam et est dolores, ...',
        author: 'Max Johnson',
        date_posted: 'September 06, 2015 at 06:44 PM',
    }
]

const BlogStreamPager = ({onClickButton}) => (
    <div className="pager">
        <a onClick={onClickButton} className="pager-btn" >← Newer</a>
        <a className="pager-btn" >Older →</a>
    </div>
);


class BlogStream extends Component {

   renderBlogItems(){

        return blogItemsDataStub.map((item, i) => (
          <article key={i} className="blog-item">
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

   onClickButton() {
       // alert('test');
   }

   render() {
       return (
            <div className="blog-stream">
                <h1>Keep It Simple <small>Welcome</small></h1>
                <div className="blog-items">{this.renderBlogItems()}</div>
                <BlogStreamPager onClickButton={this.onClickButton} />
             </div>
       );
   }
}


export default BlogStream;
