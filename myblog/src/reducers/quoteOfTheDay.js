import { GET_QUOTE_OF_THE_DAY } from '../actions/types'


export default function (state = {text: '', author: ''}, action) {
    switch (action.type){
        case GET_QUOTE_OF_THE_DAY:
            return {...action.payload}
        default:
            return state
    }
}
