import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import post from "./post";

export default combineReducers({
    form: formReducer,
    post,
});