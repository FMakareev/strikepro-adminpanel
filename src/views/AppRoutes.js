import React from "react";

import {BlogRoutes} from "./Blog/routes";
// import {NomenclatureRoutes} from "./Nomenclature/routes";
import {SlidesRoutes} from "./Slides/routes";
import {TileRoutes} from "./Tile/routes";
import {StaticPageRoutes} from "./StaticPage/routes";
import {UrlAliasRoutes} from "./URLAlias/routes";
import {FeedbackRoutes} from "./Feedback/routes";
import {Redirect} from "react-router-dom";

const Page404 = React.lazy(() => import('./Pages/Page404'));
const Page500 = React.lazy(() => import('./Pages/Page500'));

export const AppRoutes = [
  {
    path: '/',
    exact: true,
    name: '/',
    component: ()=>(<Redirect to={'/blog'}/>)
  },
  ...BlogRoutes,
  // ...NomenclatureRoutes,
  ...SlidesRoutes,
  ...TileRoutes,
  ...StaticPageRoutes,
  ...UrlAliasRoutes,
  ...FeedbackRoutes,
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
