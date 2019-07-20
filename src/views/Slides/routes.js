import React from 'react';

const Slides = React.lazy(() => import('./View/Slides'));
const SlidesEditor = React.lazy(() => import('./View/SlidesEditor'));


export const SlidesRoutes = [
  {
    path: '/slides',
    exact: true,
    name: 'module.name.slides',
    component: Slides,
  },
  {
    path: '/slides/list',
    exact: true,
    name: 'slides.list.title',
    component: Slides,
  },
  {
    path: '/slides/editor/:id',
    exact: false,
    name: 'slides.editor.title',
    component: SlidesEditor,
  },
  {
    path: '/slides/editor',
    exact: true,
    name: 'slides.editor.title',
    component: SlidesEditor,
  },
];

export default SlidesRoutes;
