import { combineReducers } from 'redux'
import {Articles, FullArticle } from './articles'
import QuoteOfTheDayReducer from './quoteOfTheDay'
import Account from './account'

export default combineReducers({
    articles: Articles,
    fullArticle: FullArticle,
    quoteOfTheDay: QuoteOfTheDayReducer,
    account: Account,
})
