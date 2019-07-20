import {FormattedMessage} from "react-intl";
import React from "react";

export const URLAliasMenu = [
  {
    name: (<FormattedMessage
      id='module.name.urlAlias'
    />),
    icon: 'd-none',
    children: [
      {
        name: (<FormattedMessage
          id='urlAlias.list.title'
        />),
        url: '/url-alias/list',
        icon: 'fa fa-list fa-lg'
      },
      {
        name: (<FormattedMessage
          id='urlAlias.editor.title'
        />),
        url: '/url-alias/editor',
        icon: 'fa fa-edit fa-lg'
      },
    ]
  },
];
