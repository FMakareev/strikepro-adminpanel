import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer} from '@brigad/redux-rest-easy';

export default combineReducers({
  form: formReducer,
  restEasy: reducer,
});
