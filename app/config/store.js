import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default storeWithMiddleware;
