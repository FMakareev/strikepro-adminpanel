export const maxLength = (message) => (maxLen) => (value) => value && value.length > maxLen ? message : null;
