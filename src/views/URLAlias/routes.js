import React from 'react';

const URLAliasList = React.lazy(() => import('./View/URLAliasList'));
const URLAliasEditor = React.lazy(() => import('./View/URLAliasEditor'));


export const UrlAliasRoutes = [
  {
    path: '/url-alias',
    exact: true,
    name: 'module.name.urlAlias',
    component: URLAliasList,
  },
  {
    path: '/url-alias/list',
    exact: true,
    name: 'urlAlias.list.title',
    component: URLAliasList,
  },
  {
    path: '/url-alias/editor/:id',
    exact: false,
    name: 'urlAlias.editor.title',
    component: URLAliasEditor,
  },
  {
    path: '/url-alias/editor',
    exact: true,
    name: 'urlAlias.editor.title',
    component: URLAliasEditor,
  },
];

export default UrlAliasRoutes;
