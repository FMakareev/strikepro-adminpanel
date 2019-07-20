export const required = (message = 'Обязательно для заполнения') => (value) => {
  return (value ? undefined : message);
};
