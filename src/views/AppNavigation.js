import {MenuNomenclature} from "./Nomenclature/menu";
import {MenuBlog} from "./Blog/menu";
import {MenuSlides} from "./Slides/menu";
import {MenuTile} from "./Tile/menu";
import {StaticPageMenu} from "./StaticPage/menu";
import {URLAliasMenu} from "./URLAlias/menu";

export const AppNavigation = {
  items: [
    ...MenuBlog,
    ...MenuNomenclature,
    ...MenuSlides,
    ...MenuTile,
    ...StaticPageMenu,
    ...URLAliasMenu,
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
