import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'


let createStoreMiddleware = applyMiddleware()(createStore);

const initialState = {};

const store = createStoreMiddleware(
    rootReducer,
    initialState,
    composeWithDevTools(),
);

export default store;
