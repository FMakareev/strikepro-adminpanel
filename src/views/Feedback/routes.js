import React from 'react';

const FeedbackList = React.lazy(() => import('./View/FeedbackList'));
const FeedbackEditor = React.lazy(() => import('./View/FeedbackEditor'));


export const FeedbackRoutes = [
  {
    path: '/feedback',
    exact: true,
    name: 'module.name.feedback',
    component: FeedbackList,
  },
  {
    path: '/feedback/list',
    exact: true,
    name: 'feedback.list.title',
    component: FeedbackList,
  },
  {
    path: '/feedback/create',
    exact: true,
    name: 'Создать обращение',
    component: FeedbackEditor,
  },
];

export default FeedbackRoutes;
