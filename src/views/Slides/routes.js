import React from 'react';

<<<<<<< HEAD
const Slides = React.lazy(() => import('./Slides'));
const SlidesEditor = React.lazy(() => import('./SlidesEditor'));
=======
const Slides = React.lazy(() => import('./View/Slides'));
const SlidesEditor = React.lazy(() => import('./View/SlidesEditor'));
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe


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
