import React from 'react';

const TileList = React.lazy(() => import('./View/TileList/index'));
const TileEditor = React.lazy(() => import('./View/TileEditor'));


export const TileRoutes = [
  {
    path: '/tile',
    exact: true,
    name: 'module.name.tile',
    component: TileList,
  },
  {
    path: '/tile/list',
    exact: true,
    name: 'tile.list.title',
    component: TileList,
  },
  {
    path: '/tile/editor/:id',
    exact: false,
    name: 'tile.editor.title',
    component: TileEditor,
  },
  {
    path: '/tile/editor',
    exact: true,
    name: 'tile.editor.title',
    component: TileEditor,
  },
];

export default TileRoutes;
