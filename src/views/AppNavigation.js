// import {MenuNomenclature} from "./Nomenclature/menu";
import {MenuBlog} from "./Blog/menu";
import {MenuSlides} from "./Slides/menu";
import {MenuTile} from "./Tile/menu";
import {StaticPageMenu} from "./StaticPage/menu";
import {URLAliasMenu} from "./URLAlias/menu";
import {FeedbackMenu} from "./Feedback/menu";
import {FormattedMessage} from "react-intl";
import React from "react";

export const AppNavigation = {
  items: [
    ...MenuBlog,
    // ...MenuNomenclature,
    ...MenuSlides,
    ...MenuTile,
    ...StaticPageMenu,
    ...URLAliasMenu,
    ...FeedbackMenu,
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
      name: (<FormattedMessage
        id='button.logout'
      />),
      url: '/login',
      icon: 'icon-logout'
    },

  ],

}


export default AppNavigation;
