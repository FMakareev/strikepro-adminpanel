export const hasOwnProperty = (obj, prop) => {
  if (!obj || !prop) {
    return false
  }
  return Object.prototype.hasOwnProperty.call(obj, prop)
};
