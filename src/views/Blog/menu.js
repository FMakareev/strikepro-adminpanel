import React from 'react';
import {FormattedMessage} from "react-intl";

export const MenuBlog = [
  {
    name: <FormattedMessage
      id='module.name.blog'
    />,
    icon: 'd-none',
    children: [
      {
        name: (<FormattedMessage
          id='blog.post.list.title'
        />),
        url: '/blog/posts',
        icon: 'fa fa-list fa-lg'
      },
      {
        name: (<FormattedMessage
          id='blog.post.editor.title'
        />),
        url: '/blog/post-editor',
        icon: 'fa fa-edit fa-lg'
      },
      {
        name: (<FormattedMessage
          id='blog.category.list.title'
        />),
        url: '/blog/categories',
        icon: 'fa fa-list fa-lg'
      },
      {
        name: (<FormattedMessage
          id='blog.category.editor.title'
        />),
        url: '/blog/category-editor',
        icon: 'fa fa-edit fa-lg'
      },
    ]
  },
];
