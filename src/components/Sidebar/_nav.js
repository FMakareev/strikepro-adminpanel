import config from '../../config';
import {MenuNomenclature} from "../../views/Nomenclature/menu";
// config.api+config.api.logout

export default {
  items: [
    {
      title: true,
      name: 'Блог',
      wrapper: {            // optional wrapper object
        element: "span",      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ""             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Посты',
      url: '/posts',
      icon: 'icon-speech'
    },
    {
      name: 'Создать пост',
      url: '/post_editor',
      icon: 'icon-speech'
    },
    {
      name: 'Категории',
      url: '/categories',
      icon: 'icon-speech'
    },
    {
      name: 'Создать категорию',
      url: '/category_editor',
      icon: 'icon-speech'
    },
    {
      title: true,
      name: 'Плитки',
      wrapper: {            // optional wrapper object
        element: "span",      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ""             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Список плиток',
      url: '/tiles',
      icon: 'icon-speech'
    },
    {
      name: 'Создать плитку',
      url: '/tile_editor',
      icon: 'icon-speech'
    },

    ...MenuNomenclature,
    {
      title: true,
      name: 'Слайдер',
      wrapper: {            // optional wrapper object
        element: "span",      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ""             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Список слайдов',
      url: '/slides',
      icon: 'icon-speech'
    },
    {
      name: 'Создать слайд',
      url: '/slides_editor',
      icon: 'icon-speech'
    },


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
    // {
    //     title: true,
    //     name: 'Dev Page',
    //     wrapper: {            // optional wrapper object
    //         element: "span",      // required valid HTML5 element tag
    //         attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //     },
    //     class: ""             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //     name: 'Dashboard',
    //     url: '/dashboard',
    //     icon: 'icon-speedometer',
    //     badge: {
    //         variant: 'info',
    //         text: 'NEW'
    //     }
    // },
    // {
    //     title: true,
    //     name: 'UI elements',
    //     wrapper: {            // optional wrapper object
    //         element: "span",      // required valid HTML5 element tag
    //         attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //     },
    //     class: ""             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //     name: 'Components',
    //     url: '/components',
    //     icon: 'icon-puzzle',
    //     children: [
    //         {
    //             name: 'Buttons',
    //             url: '/components/buttons',
    //             icon: 'icon-puzzle'
    //         },
    //         {
    //             name: 'Social Buttons',
    //             url: '/components/social-buttons',
    //             icon: 'icon-puzzle'
    //         },
    //         {
    //             name: 'Cards',
    //             url: '/components/cards',
    //             icon: 'icon-puzzle'
    //         },
    //         {
    //             name: 'Forms',
    //             url: '/components/forms',
    //             icon: 'icon-puzzle'
    //         },
    //         {
    //             name: 'Modals',
    //             url: '/components/modals',
    //             icon: 'icon-puzzle'
    //         },
    //         {
    //             name: 'Switches',
    //             url: '/components/switches',
    //             icon: 'icon-puzzle'
    //         },
    //         {
    //             name: 'Tables',
    //             url: '/components/tables',
    //             icon: 'icon-puzzle'
    //         },
    //         {
    //             name: 'Tabs',
    //             url: '/components/tabs',
    //             icon: 'icon-puzzle'
    //         }
    //     ]
    // },
    // {
    //     name: 'Icons',
    //     url: '/icons',
    //     icon: 'icon-star',
    //     children: [
    //         {
    //             name: 'Font Awesome',
    //             url: '/icons/font-awesome',
    //             icon: 'icon-star',
    //             badge: {
    //                 variant: 'secondary',
    //                 text: '4.7'
    //             }
    //         },
    //         {
    //             name: 'Simple Line Icons',
    //             url: '/icons/simple-line-icons',
    //             icon: 'icon-star'
    //         }
    //     ]
    // },
    // {
    //     name: 'Widgets',
    //     url: '/widgets',
    //     icon: 'icon-calculator',
    //     badge: {
    //         variant: 'info',
    //         text: 'NEW'
    //     }
    // },
    // {
    //     name: 'Charts',
    //     url: '/charts',
    //     icon: 'icon-pie-chart'
    // },
    // {
    //     divider: true
    // },
    // {
    //     title: true,
    //     name: 'Extras'
    // },
    // {
    //     name: 'Pages',
    //     url: '/pages',
    //     icon: 'icon-star',
    //     children: [
    //         {
    //             name: 'Login',
    //             url: '/login',
    //             icon: 'icon-star'
    //         },
    //         {
    //             name: 'Register',
    //             url: '/register',
    //             icon: 'icon-star'
    //         },
    //         {
    //             name: 'Error 404',
    //             url: '/404',
    //             icon: 'icon-star'
    //         },
    //         {
    //             name: 'Error 500',
    //             url: '/500',
    //             icon: 'icon-star'
    //         }
    //     ]
    // }
  ]
};
