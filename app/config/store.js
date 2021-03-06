import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const storeWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

export default storeWithMiddleware;
