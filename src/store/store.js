import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'


let createStoreMiddleware = applyMiddleware(thunk)(createStore);

const initialState = {};

const store = createStoreMiddleware(
    rootReducer,
    initialState,
    composeWithDevTools(),
);

export default store;
