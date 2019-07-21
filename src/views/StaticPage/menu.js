import {FormattedMessage} from "react-intl";
import React from "react";

export const StaticPageMenu = [
  {
    name: (<FormattedMessage
      id='module.name.staticPage'
    />),
    icon: 'd-none',
    children: [
      {
        name: (<FormattedMessage
          id="staticPages.list.title"
        />),
        url: '/static-page/list',
        icon: 'fa fa-list fa-lg'
      },
      {
        name: (<FormattedMessage
          id="staticPages.create.title"
        />),
        url: '/static-page/editor',
        icon: 'fa fa-edit fa-lg'
      },
    ]
  },
];
