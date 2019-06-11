import {format} from 'date-fns/esm'

export const DEFAULT_DATE_FORMAT = "yyyy-MM-d h:mm:ss";

export const dateToFormat = (date) => {
  return format(date, DEFAULT_DATE_FORMAT);
};
