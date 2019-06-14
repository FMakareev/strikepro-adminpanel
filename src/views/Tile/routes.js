import React from 'react';

<<<<<<< HEAD
const TileList = React.lazy(() => import('./TileList/index'));
const TileEditor = React.lazy(() => import('./TileEditor'));
=======
const TileList = React.lazy(() => import('./View/TileList/index'));
const TileEditor = React.lazy(() => import('./View/TileEditor'));
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe


export const TileRoutes = [
  {
    path: '/tile-list',
    exact: true,
    name: 'Tile List',
    component: TileList,
  },
  {
    path: '/tile-editor/:id',
    exact: false,
    name: 'Редактировать тайл',
    component: TileEditor,
  },
  {
    path: '/tile-editor',
    exact: true,
    name: 'Создать тайл',
    component: TileEditor,
  },
];

export default TileRoutes;
