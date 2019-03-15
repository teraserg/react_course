import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
// import Async from './middlewares/async';
import thunkMiddleware from 'redux-thunk'

const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(thunkMiddleware));
  return store;
};

export default configureStore();
