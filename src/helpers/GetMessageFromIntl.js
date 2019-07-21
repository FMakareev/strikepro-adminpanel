import {hasOwnProperty} from "./hasOwnProperty";

export const GetMessageFromIntl = (intl, key, values) => {
  if (key && intl && intl.messages) {
    try {
      if (values && typeof key === 'object') {
        return intl.formatMessage(key, values)
      }
    } catch (e) {
      console.log(e);
    }
    if (hasOwnProperty(intl.messages, key)) {
      return intl.messages[key]
    }
  }
  return key;
};

export default GetMessageFromIntl;

