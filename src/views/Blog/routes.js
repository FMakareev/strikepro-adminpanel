import React from 'react';

const Posts = React.lazy(() => import('./View/Posts'));
const PostEdit = React.lazy(() => import('./View/PostEdit'));

const Categories = React.lazy(() => import('./View/Categories'));
const CategoryEdit = React.lazy(() => import('./View/CategoryEdit'));


export const BlogRoutes = [
  {
    path: '/blog',
    exact: true,
    name: 'module.name.blog',
    component: Posts,
  },
  {
    path: '/blog/posts',
    exact: true,
    name: 'blog.post.list.title',
    component: Posts,
  },
  {
    path: '/blog/post-editor/:id',
    exact: false,
    name: 'blog.post.editor.title',
    component: PostEdit,
  },
  {
    path: '/blog/post-editor',
    exact: true,
    name: 'blog.post.editor.title',
    component: PostEdit,
  },

  {
    path: '/blog/categories',
    exact: true,
    name: 'blog.category.list.title',
    component: Categories,
  },
  {
    path: '/blog/category-editor/:id',
    exact: false,
    name: 'blog.category.editor.title',
    component: CategoryEdit,
  },
  {
    path: '/blog/category-editor',
    exact: true,
    name: 'blog.category.editor.title',
    component: CategoryEdit,
  },
];

export default BlogRoutes;
