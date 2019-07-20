import {cookieLangKey, defaultLocale} from '../../../shared/constants';
import queryString from 'query-string';

/**
 * @link https://developer.mozilla.org/ru/docs/Web/API/NavigatorLanguage
 * @desc метод получает все доступные пользователю локали
 * */
export const getUserLocaleFromNavigator = () => {
  /** получаем текущую локаль пользователя */
  let language = defaultLocale;
  let languages = [defaultLocale];
  const matchResult = window.navigator.language.match(/([A-z]{2})/i);

  if (matchResult) {
    language = matchResult[1].toLowerCase();
  } else {
    language = defaultLocale;
  }

  /** список всех доступных пользователю локалей */
  languages = window.navigator.languages.map((item) => {
    const result = item.match(/([A-z]{2})/i);
    if (result && result[0]) {
      return result[0];
    }
    return defaultLocale;
  });


  return {
    language,
    languages,
  };
};

/**
 * @desc получаем пользовательскую локаль из querystring
 * */
export const getUserLocaleFromQueryString = (langKey = cookieLangKey) => {
  const result = window.location.search ? queryString.parse(window.location.search) : null;
  if (result && result[langKey]) {
    return result[langKey];
  }

  return null;
};
