
/**
 * @param {object} error
 * @param {object} error.errors
 * @param {array} error.message
 * */
export const normalizeSubmissionError = (error) => {
  const data = {
    _error: error.message ? error.message[0] : null,
  };
  for (let prop in error.errors) {
    if (Array.isArray(error.errors[prop])) {
      data[prop] = error.errors[prop][0];
    }
  }
  return data;
}
