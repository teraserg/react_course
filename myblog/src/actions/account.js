import { SIGN_IN, SIGN_OUT, RESTORE_SING_IN } from './types'
import api from '../services/api'


function signInSuccess(token){
    return {
        type: SIGN_IN,
        payload: token
    }
}


export const signInRequest = (username, password) => async dispatch => {

    try {
        const result = await api.post( '/login', {username, password});
        dispatch(signInSuccess(result.data.token));
    }
    catch (e) {
        alert(`Failed to sign in: ${e}`);
    }
}


export const signOut = () => dispatch => {
    dispatch({type: SIGN_OUT});
}


export const signIn = (token) => dispatch => {
    dispatch(signInSuccess(token))
}


export const restoreSignIn = () => {
    return {type: RESTORE_SING_IN};
}
