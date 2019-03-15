import configureStore from 'redux-mock-store';

// Actions to be tested
import * as selectActions from '../../actions/account';
import {SIGN_IN, SIGN_OUT, RESTORE_SING_IN} from '../../actions/types';

import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();


describe('select_actions', () => {
  beforeEach(() => {
      store.clearActions();
  });

  it('signIn', () => {
      const token = 'token'

      const expectedActions = [
          {
              type: SIGN_IN,
              payload: token
          }
      ];

      store.dispatch(selectActions.signIn(token));
      expect(store.getActions()).toEqual(expectedActions);
  });


  it('signOut', () => {

      const expectedActions = [
          {
              type: SIGN_OUT,
          }
      ];

      store.dispatch(selectActions.signOut());
      expect(store.getActions()).toEqual(expectedActions);
  });


  it('restoreSignIn', () => {

      const expectedActions = [
          {
              type: RESTORE_SING_IN,
          }
      ];

      store.dispatch(selectActions.restoreSignIn());
      expect(store.getActions()).toEqual(expectedActions);
  });

});
