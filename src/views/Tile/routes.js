import React from 'react';

const TileList = React.lazy(() => import('./View/TileList/index'));
const TileEditor = React.lazy(() => import('./View/TileEditor'));


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
