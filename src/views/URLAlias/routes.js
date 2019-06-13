import React from 'react';

const URLAliasList = React.lazy(() => import('./View/URLAliasList'));
const URLAliasEditor = React.lazy(() => import('./View/URLAliasEditor'));


export const StaticPageRoutes = [
  {
    path: '/url-alias-list',
    exact: true,
    name: 'Список url alias',
    component: URLAliasList,
  },
  {
    path: '/url-alias-editor/:id',
    exact: false,
    name: 'Редактировать url alias',
    component: URLAliasEditor,
  },
  {
    path: '/url-alias-editor',
    exact: true,
    name: 'Создать url alias',
    component: URLAliasEditor,
  },
];

export default StaticPageRoutes;
