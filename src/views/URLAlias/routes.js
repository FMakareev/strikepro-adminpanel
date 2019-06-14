import React from 'react';

const URLAliasList = React.lazy(() => import('./View/URLAliasList'));
const URLAliasEditor = React.lazy(() => import('./View/URLAliasEditor'));


export const UrlAliasRoutes = [
  {
    path: '/url-alias-list',
    exact: true,
    name: 'Список URL псевдонимов',
    component: URLAliasList,
  },
  {
    path: '/url-alias-editor/:id',
    exact: false,
    name: 'Редактировать URL псевдонима',
    component: URLAliasEditor,
  },
  {
    path: '/url-alias-editor',
    exact: true,
    name: 'Редактор URL псевдонима',
    component: URLAliasEditor,
  },
];

export default UrlAliasRoutes;
