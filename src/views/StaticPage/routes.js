import React from 'react';

const StaticPageList = React.lazy(() => import('./View/StaticPageList'));
const StaticPageEditor = React.lazy(() => import('./View/StaticPageEditor'));


export const StaticPageRoutes = [
  {
    path: '/static-page',
    exact: true,
    name: 'module.name.staticPage',
    component: StaticPageList,
  },
  {
    path: '/static-page/list',
    exact: true,
    name: "staticPages.list.title",
    component: StaticPageList,
  },
  {
    path: '/static-page/editor/:id',
    exact: false,
    name: "staticPages.editor.title",
    component: StaticPageEditor,
  },
  {
    path: '/static-page/editor',
    exact: true,
    name: "staticPages.editor.title",
    component: StaticPageEditor,
  },
];

export default StaticPageRoutes;
