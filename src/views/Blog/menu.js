<<<<<<< HEAD
export const MenuBlog = [
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
    icon: 'fa fa-list fa-lg'
  },
  {
    name: 'Создать пост',
    url: '/post-editor',
    icon: 'fa fa-edit fa-lg'
  },
  {
    name: 'Категории',
    url: '/categories',
    icon: 'fa fa-list fa-lg'
  },
  {
    name: 'Создать категорию',
    url: '/category-editor',
    icon: 'fa fa-edit fa-lg'
  },
]
=======
import React from 'react';
export const MenuBlog = [
  {
    name: 'Блог',
    icon: 'd-none',
    children: [
      {
        name: 'Посты',
        url: '/posts',
        icon: 'fa fa-list fa-lg'
      },
      {
        name: 'Создать пост',
        url: '/post-editor',
        icon: 'fa fa-edit fa-lg'
      },
      {
        name: 'Категории',
        url: '/categories',
        icon: 'fa fa-list fa-lg'
      },
      {
        name: 'Создать категорию',
        url: '/category-editor',
        icon: 'fa fa-edit fa-lg'
      },
    ]
  },
];
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
