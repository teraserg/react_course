import React, { Component } from 'react';
import './App.css';
import RightAside from './RightAside';
import BlogStream from './BlogStream';
import Navigation from './Navigation';

// This will be coming from server side.
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

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <hr />
            <p>Copyright © Keep It Simple Blog 2018</p>
        </footer>
    )
  }
}


class App extends Component {

  render() {

    return (
      <div className="container">

        <Navigation />

        <div className="main">
            <BlogStream blogItemsData={blogItemsDataStub} />
            <RightAside />
        </div>

        <Footer />

    </div>
    );
  }
}

export default App;
