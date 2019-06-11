import React from 'react';

const Posts = React.lazy(() => import('./Posts'));
const PostEdit = React.lazy(() => import('./PostEdit'));

const Categories = React.lazy(() => import('./Categories'));
const CategoryEdit = React.lazy(() => import('./CategoryEdit'));


export const BlogRoutes = [
  {
    path: '/',
    exact: true,
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/posts',
    exact: true,
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/post-editor/:id',
    exact: false,
    name: 'Post editor',
    component: PostEdit,
  },
  {
    path: '/post-editor',
    exact: true,
    name: 'Post editor',
    component: PostEdit,
  },

  {
    path: '/categories',
    exact: true,
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/category-editor/:id',
    exact: false,
    name: 'Category editor',
    component: CategoryEdit,
  },
  {
    path: '/category-editor',
    exact: true,
    name: 'Category editor',
    component: CategoryEdit,
  },
];

export default BlogRoutes;
