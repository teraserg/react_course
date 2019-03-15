import { GET_ARTICLES, GET_FULL_ARTICLE, GET_COMMENTS, POST_COMMENT, DELETE_COMMENT } from './types'
import api from '../services/api'
import comments from '../data/comments'



export const getArticles = (pageNumber=1, articlesPerPage=1) => dispatch => {
    api.get(`/posts?_limit=${articlesPerPage}&_page=${pageNumber}`)
        .then(result => dispatch({ type: GET_ARTICLES,
                                   payload: result,
                                   articlesPerPage,
                                   currentPage: pageNumber
                                   }))
        .catch(error => {alert('Failed to fetch articles')})
}


export const getFullArticle = (articleId) => dispatch => {

    api.get('/posts/'+articleId)
        .then(result => dispatch({
            type: GET_FULL_ARTICLE,
            payload: result
        }))
        .catch(error => {alert('Failed to fetch article')});
}


export const getComments = (articleId) => dispatch => {

    api.get(`/posts/${articleId}/comments`)
    .then(response => {

        dispatch({
                type: GET_COMMENTS,
                payload: response.data
            });
    })
    .catch(error => {alert(`Failed to get comments for article ${articleId}, ${error}`)});
}


export const postComment = (articleId, author, comment, token) => dispatch => {
    const today = (new Date()).toGMTString();
    console.log('Posting to article ', articleId);
    console.log(`/posts/${articleId}/comments`);

    api.post(`/posts/${articleId}/comments`,
                {
                    author,
                    comment,
                    created_at: today,
                    avatar: "http://www.gravatar.com/avatar/7dea3df23e3bfa7fdfd264b1aa5fd34e?s=64&d=identicon",
                },
                {
                   headers: {'Authorization': `bearer ${token}`}
                }
            )
        .then(response => {

            console.log('Comment response: ', response);
            dispatch({
                type: POST_COMMENT,
                payload: response.data
            });
        })
        .catch(error => {alert(`Failed to post a comment ${error}`)});
}


export const deleteComment = (articleId, commentId, token) => dispatch => {

    api.delete(`/comments/${commentId}`,
                {
                   headers: {'Authorization': `bearer ${token}`}
                }
            )
        .then(response => {
            dispatch({
                type: DELETE_COMMENT,
                payload: {articleId, commentId}
            });
        })
        .catch(error => {
            alert(`Failed to post a comment ${error}, del simulation...`);
            dispatch({
                type: DELETE_COMMENT,
                payload: {articleId, commentId}
            });
        });
}
