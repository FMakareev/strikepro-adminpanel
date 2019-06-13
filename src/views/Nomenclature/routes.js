import React from 'react';



const NomenclatureEditor = React.lazy(() => import('./Nomenclature/Editor'));
const NomenclatureList = React.lazy(() => import('./Nomenclature/List'));

const TypeOfNomenclatureList = React.lazy(() => import('./TypesOfNomenclature/List'));
const TypeOfNomenclatureEditor = React.lazy(() => import('./TypesOfNomenclature/Editor'));

const NomenclatureCharacteristicsList = React.lazy(() => import('./NomenclatureCharacteristics/List'));
const NomenclatureCharacteristicsEditor = React.lazy(() => import('./NomenclatureCharacteristics/Editor'));



export const NomenclatureRoutes = [
  {
    path: '/nomenclature-list',
    exact: true,
    name: 'Nomenclature List',
    component: NomenclatureList,
  },
  {
    path: '/nomenclature-editor/:id',
    exact: false,
    name: 'Nomenclature Editor',
    component: NomenclatureEditor,
  },
  {
    path: '/nomenclature-editor',
    exact: true,
    name: 'Nomenclature Editor',
    component: NomenclatureEditor,
  },

  {
    path: '/nomenclature-type-list',
    exact: true,
    name: 'Type of nomenclature list',
    component: TypeOfNomenclatureList,
  },
  {
    path: '/nomenclature-type-editor/:id',
    exact: false,
    name: 'Type of nomenclature editor',
    component: TypeOfNomenclatureEditor,
  },
  {
    path: '/nomenclature-type-editor',
    exact: true,
    name: 'Type of nomenclature editor',
    component: TypeOfNomenclatureEditor,
  },

  {
    path: '/nomenclature-characteristics-list',
    exact: true,
    name: 'Nomenclature characteristics list',
    component: NomenclatureCharacteristicsList,
  },
  {
    path: '/nomenclature-characteristics-editor/:id',
    exact: false,
    name: 'Редактировать характеристику номенклатуры',
    component: NomenclatureCharacteristicsEditor,
  },
  {
    path: '/nomenclature-characteristics-editor',
    exact: true,
    name: 'Создать характеристику номенклатуры',
    component: NomenclatureCharacteristicsEditor,
  },


];
