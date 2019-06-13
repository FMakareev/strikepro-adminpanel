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
