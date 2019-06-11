export const required = value => {
  return (value ? undefined : 'Обязательно для заполнения');
};
