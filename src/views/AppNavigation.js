import {MenuNomenclature} from "./Nomenclature/menu";
import {MenuBlog} from "./Blog/menu";
import {MenuSlides} from "./Slides/menu";
import {MenuTile} from "./Tile/menu";
<<<<<<< HEAD
=======
import {StaticPageMenu} from "./StaticPage/menu";
import {URLAliasMenu} from "./URLAlias/menu";
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe

export const AppNavigation = {
  items: [
    ...MenuBlog,
    ...MenuNomenclature,
    ...MenuSlides,
    ...MenuTile,
<<<<<<< HEAD
=======
    ...StaticPageMenu,
    ...URLAliasMenu,
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
    {
      title: true,
      name: '',
      wrapper: {            // optional wrapper object
        element: "span",      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ""             // optional class names space delimited list for title item ex: "text-center"
    },

    {
      name: 'Выход',
      url: '/login',
      icon: 'icon-logout'
    },

  ],

}


export default AppNavigation;
