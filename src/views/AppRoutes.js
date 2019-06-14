import {BlogRoutes} from "./Blog/routes";
import {NomenclatureRoutes} from "./Nomenclature/routes";
import {SlidesRoutes} from "./Slides/routes";
import {TileRoutes} from "./Tile/routes";
import {StaticPageRoutes} from "./StaticPage/routes";
import {UrlAliasRoutes} from "./URLAlias/routes";
import React from "react";

const Page404 = React.lazy(() => import('./Pages/Page404'));
const Page500 = React.lazy(() => import('./Pages/Page500'));

export const AppRoutes = [
  ...BlogRoutes,
  ...NomenclatureRoutes,
  ...SlidesRoutes,
  ...TileRoutes,
  ...StaticPageRoutes,
  ...UrlAliasRoutes,
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
