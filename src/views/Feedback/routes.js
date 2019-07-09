import React from 'react';

const FeedbackList = React.lazy(() => import('./View/FeedbackList'));
const FeedbackEditor = React.lazy(() => import('./View/FeedbackEditor'));


export const FeedbackRoutes = [
  {
    path: '/feedback',
    exact: true,
    name: 'Список обращений',
    component: FeedbackList,
  },
  {
    path: '/create-feedback',
    exact: true,
    name: 'Создать обращение',
    component: FeedbackEditor,
  },
];

export default FeedbackRoutes;
