export const maxLength = (maxLen) => (value) => value && value.length > maxLen ? `Максимальное количество символов ${maxLen}`:null;
