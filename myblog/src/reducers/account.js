import jwt from 'jsonwebtoken'
import { SIGN_IN, SIGN_OUT, RESTORE_SING_IN } from '../actions/types'
import {saveToken, removeToken, getToken} from '../services/storage'


const initialAccountState = {
    userName: 'guest',
    role: '',
    token: '',
    signed: false
}


export default function (state = initialAccountState, action) {
    switch (action.type){
        case SIGN_IN:
            const token = action.payload;
            const decoded = jwt.decode(token);
            saveToken(token);
            return {...initialAccountState, token, userName: decoded.username, role: decoded.role, signed: true}
        case SIGN_OUT:
            removeToken();
            return initialAccountState;
        case RESTORE_SING_IN:
            const restoredToken = getToken();
            if (restoredToken){
                const decoded = jwt.decode(restoredToken);
                return {...initialAccountState,
                        token: restoredToken,
                        userName: decoded.username,
                        role: decoded.role,
                        signed: true}
            }
            else
                return state;
        default:
            return state
    }
}
