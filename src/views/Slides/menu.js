import {FormattedMessage} from "react-intl";
import React from "react";

export const MenuSlides= [
  {
    name: (<FormattedMessage
      id='module.name.slides'
    />),
    icon: 'd-none',
    children: [
      {
        name: (<FormattedMessage
          id='slides.list.title'
        />),
        url: '/slides/list',
        icon: 'fa fa-list fa-lg'
      },
      {
        name: (<FormattedMessage
          id='slides.create.title'
        />),
        url: '/slides/editor',
        icon: 'fa fa-edit fa-lg'
      },
    ]
  },
];
