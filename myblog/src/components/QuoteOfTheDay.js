import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';


class QuoteOfTheDay extends Component {

    static propTypes = {
        quoteOfTheDay: PropTypes.object.isRequired
    };

    static defaultProps = {
        quoteOfTheDay: {text: '', author: ''}
    };

    componentDidMount() {
        if (!this.props.quoteOfTheDay.text){
            this.props.getQuoteOfTheDay();
        }
    }

    render() {
        return (
            <div className="aside-item">
                <h4>Quote of the Day</h4>
                <q>{this.props.quoteOfTheDay.text} <i>— {this.props.quoteOfTheDay.author}</i>
                </q>
            </div>
        );
    }
}


const mapStateToProps = ({quoteOfTheDay}) => ({quoteOfTheDay})

export default connect(mapStateToProps, actions)(QuoteOfTheDay);
