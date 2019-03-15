import accountReducer from '../../reducers/account';
import {
  SIGN_IN, SIGN_OUT, RESTORE_SING_IN
} from '../../actions/types';

const initialAccountState = {
    userName: 'guest',
    role: '',
    token: '',
    signed: false
}

const tokenStub = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsInVzZXJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.EWXRmxzSjAgeWBGPtsBP5EtJX4-dv7GCfu4FSb6_3CE'

describe('accountReducer', () => {
    it('Initial state', () => {
        const action = { type: 'dummy_action' };
        expect(accountReducer(undefined, action)).toEqual(initialAccountState);
    });

    it('Sign In', () => {

        const signedInAccountState = {
            userName: 'John Doe',
            role: 'user',
            token: tokenStub,
            signed: true
        }

        const action = {type: SIGN_IN, payload: tokenStub};
        expect(accountReducer(initialAccountState, action)).toEqual(signedInAccountState);
    });

});
