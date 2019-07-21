import {updateIntl} from 'react-intl-redux';
import {addLocaleData} from 'react-intl';
import findIndex from 'lodash/findIndex';
import jsCookie from 'js-cookie';
import history from '../../../history';

import {LocaleAction} from './types';
import {getUserLocaleFromQueryString, getUserLocaleFromNavigator} from './helpers';
import {cookieLangKey, defaultLocale} from "../../../shared/constants";


/** @desc инициализация словаря на клиенте */
export const initLocalesClient = () => {
  return async (dispatch) => {

    await dispatch(getLocales());

    const currentLocale = dispatch(getCurrentLocalize());

    const messages = await dispatch(getMessages(currentLocale));

    console.log('messages: ', messages);
    return messages;
  };
};


/** @desc Получить список доступных языков */
export const getLocales = () => {
  return (dispatch) => {
    return fetch('translations/languages.json')
      .then(response => response.json())
      .then((response) => {
        dispatch(
          updateLocales(Object.assign({}, ...response.languages.map(item => ({[item]: item})))),
        );
        return response;
      })
      .catch((error) => {
        console.error('Error getLocales:', error);
      });
  };
};


/** @desc Загрузить словарь для указанного языка */
export const getMessages = (locale) => {
  return (dispatch, getState) => {
    const state = getState();

    addLanguageLocaleData(locale);
    changeLocale(locale);

    if (state.locales && getState().locales[locale]) {
      if (state.intl.locale !== locale) {
        dispatch(
          // @ts-ignore
          updateIntl({
            locale,
            messages: getState().locales[locale],
          }),
        );
      }
      // return null;
    }
    // /lang/:lang
    return fetch(`/translations/${locale}.json`)
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(response => {
        console.log(response);
        dispatch(
          updateLocaleMessages({
            [locale]: response,
          }),
        );

        dispatch(
          updateIntl({
            locale,
            messages: response,
          }),
        );
        return response;
      })
      .catch((error) => {
        console.error('Error getMessages:', error);
      });
  };
};

/**
 * Попробуйте указать язык в данных языкового стандарта «react-intl»
 * и добавьте данные локали, если они были найдены.
 *
 * @param locale {String}
 */
const addLanguageLocaleData = (locale) => {
  try {
    const localeData = require(`react-intl/locale-data/${locale}`);
    addLocaleData(localeData);
    return true;
  } catch (error) {
    console.warn(
      `⚠️ It looks like the language "${locale}" is not supported by "react-intl" module.`,
    );
    return false;
  }
};

/** @desc изменяем текущую локаль в cookie и в queryString если они есть */
export const changeLocale = (lang) => {
  jsCookie.set(cookieLangKey, lang, {expires: 700});

  const queryLocale = getUserLocaleFromQueryString();

  if (queryLocale) {
    history && history.push(`?${cookieLangKey}=${lang}`);
  }
};

/** @desc */
export const getCurrentLocalize = () => {
  return (_dispatch, getState) => {
    const state = getState();
    let currentLocale = defaultLocale;

    /** получаем текущую локаль из параметров адресной строки, /?lang=en*/
    const queryLocale = getUserLocaleFromQueryString();

    if (queryLocale) {
      const localesArray = Object.entries(state.locales).map((item) => item[0]);
      /** поиск найденной локали в списке доступных локалей */
      if (findIndex(localesArray, (item) => item === queryLocale.toLowerCase()) !== -1) {
        currentLocale = queryLocale;
      }
    }

    /** получаем текущую локаль из куки*/
    const cookieLocale = jsCookie.get(cookieLangKey);
    if (cookieLocale) {
      currentLocale = cookieLocale;
    } else {
      /** получаем текущую локаль пользователя */
      currentLocale = getUserLocaleFromNavigator().language;
    }

    changeLocale(currentLocale);
    return currentLocale;
  };
};

const updateLocaleMessages = (messages) => {
  return {
    type: LocaleAction.UPDATE_LOCALE_MESSAGES,
    messages,
  };
};

const updateLocales = (messages) => {
  console.log('updateLocales: ', messages);
  return {
    type: LocaleAction.UPDATE_LOCALES,
    messages: messages,
  };
};
