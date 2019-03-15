import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../actions';


class BlogStreamPager extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired,
        initialPage: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.handleClickPrev = this.handleClickPrev.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
    }

    componentDidMount(){
        const initialPage = this.props.initialPage;
        if (initialPage && this.props.articles.currentPage !== Number(initialPage))
            this.props.getArticles(Number(initialPage));
        else if (this.props.articles.data.length === 0)
            this.props.getArticles(this.props.articles.currentPage);
    }

    handleClickPrev(event){
        //event.preventDefault();
        this.props.getArticles(this.props.articles.currentPage-1);
    }

    handleClickNext(event){
        //event.preventDefault();
        this.props.getArticles(this.props.articles.currentPage+1);
    }

    render(){
        return (
            <div className="pager">
                {this.props.articles.currentPage > 1 ?
                 <Link onClick={this.handleClickPrev} className="pager-btn" to={`/?page=${this.props.articles.currentPage-1}`}>
                    ← Newer
                 </Link> :
                 <div />}

                <div>{this.props.articles.currentPage}</div>

                {this.props.articles.data.length < this.props.articles.articlesPerPage
                 || this.props.articles.articlesPerPage * this.props.articles.currentPage === Number(this.props.articles.totalCount)
                   ? <div /> :
                   <Link onClick={this.handleClickNext} className="pager-btn" to={`/?page=${this.props.articles.currentPage+1}`}>
                    Older →
                   </Link>
                 }
            </div>
        );
    }
}


const mapStateToProps = ({articles}) => ({articles});

export default connect(mapStateToProps, actions)(BlogStreamPager);
