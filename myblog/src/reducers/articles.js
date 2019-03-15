import { GET_ARTICLES, GET_FULL_ARTICLE, GET_COMMENTS, POST_COMMENT, DELETE_COMMENT } from '../actions/types'

const articlesDefault = {
    totalCount: 0,
    data: [],
    articlesPerPage: 1,
    currentPage: 1,
}


export function Articles(state = articlesDefault, action) {
    switch (action.type){
        case GET_ARTICLES:
            return {
                ...state,
                data: [...action.payload.data],
                totalCount: action.payload.headers['x-total-count'],
                articlesPerPage: action.articlesPerPage,
                currentPage: action.currentPage
            }
        default:
            return state
    }
}

const fullArticleDefault = {
    comments: []
}


export function FullArticle(state = fullArticleDefault, action) {
    switch (action.type){
        case GET_FULL_ARTICLE:
            return {...state, ...action.payload.data}

        case POST_COMMENT:
            console.log('action', action);
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            }

        case DELETE_COMMENT:
            console.log('action delete comment', action);

            const filtered = state.comments.filter(function(item){
                return item.id !== action.payload.commentId;
            });

            return {
                ...state,
                comments: filtered
            }

        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload.reverse()
            }

        default:
            return state
    }
}
