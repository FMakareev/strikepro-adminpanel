import {BlogRoutes} from "./Blog/routes";
import {NomenclatureRoutes} from "./Nomenclature/routes";
import {SlidesRoutes} from "./Slides/routes";
import {TileRoutes} from "./Tile/routes";
<<<<<<< HEAD
=======
import {StaticPageRoutes} from "./StaticPage/routes";
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
import React from "react";

const Page404 = React.lazy(() => import('./Pages/Page404'));
const Page500 = React.lazy(() => import('./Pages/Page500'));

export const AppRoutes = [
  ...BlogRoutes,
  ...NomenclatureRoutes,
  ...SlidesRoutes,
  ...TileRoutes,
<<<<<<< HEAD
=======
  ...StaticPageRoutes,
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
  {
    path: '/500',
    exact: true,
    name: '500',
    component: Page500
  },
  {
    path: '*',
    exact: true,
    name: '404',
    component: Page404
  },
];
