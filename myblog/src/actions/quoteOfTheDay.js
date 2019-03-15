import { GET_QUOTE_OF_THE_DAY } from './types'
import quoteOfTheDay from '../data/quoteOfTheDay';

export function getQuoteOfTheDay(){
    return {
        type: GET_QUOTE_OF_THE_DAY,
        payload: quoteOfTheDay
    }
}
