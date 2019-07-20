import defaultsDeep from 'lodash/defaultsDeep';
import { LocaleAction } from './types';

export const localesReducer = (
  state = {},
  action,
) => {
  switch (action.type) {
    case LocaleAction.UPDATE_LOCALES:
      return defaultsDeep(state, action.messages);
    case LocaleAction.UPDATE_LOCALE_MESSAGES:
      return {
        ...state,
        ...action.messages,
      };
    default:
      return state;
  }
};

export default localesReducer;
