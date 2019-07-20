import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer} from '@brigad/redux-rest-easy';
import { localesReducer } from './intl/reducers';
import { intlReducer } from 'react-intl-redux';

export default combineReducers({
  form: formReducer,
  restEasy: reducer,
  intl: intlReducer,
  locales: localesReducer,
});
