import React from 'react';

const StaticPageList = React.lazy(() => import('./View/StaticPageList'));
const StaticPageEditor = React.lazy(() => import('./View/StaticPageEditor'));


export const StaticPageRoutes = [
  {
    path: '/static-page-list',
    exact: true,
    name: 'Список статических страниц',
    component: StaticPageList,
  },
  {
    path: '/static-page-editor/:id',
    exact: false,
    name: 'Редактировать статическую страницу',
    component: StaticPageEditor,
  },
  {
    path: '/static-page-editor',
    exact: true,
    name: 'Создать статическую страницу',
    component: StaticPageEditor,
  },
];

export default StaticPageRoutes;
