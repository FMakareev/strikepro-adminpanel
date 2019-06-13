import React from 'react';

const Slides = React.lazy(() => import('./View/Slides'));
const SlidesEditor = React.lazy(() => import('./View/SlidesEditor'));


export const SlidesRoutes = [
  {
    path: '/slides',
    exact: true,
    name: 'Slides',
    component: Slides,
  },
  {
    path: '/slides-editor/:id',
    exact: false,
    name: 'Slides',
    component: SlidesEditor,
  },
  {
    path: '/slides-editor',
    exact: true,
    name: 'Slides',
    component: SlidesEditor,
  },
];

export default SlidesRoutes;
