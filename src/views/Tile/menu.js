import {FormattedMessage} from "react-intl";
import React from "react";

export const MenuTile = [
  {
    name: (<FormattedMessage
      id='module.name.tile'
    />),
    icon: 'd-none',
    children: [
      {
        name: (<FormattedMessage
          id='tile.list.title'
        />),
        url: '/tile/list',
        icon: 'fa fa-list fa-lg'
      },
      {
        name: (<FormattedMessage
          id='tile.editor.title'
        />),
        url: '/tile/editor',
        icon: 'fa fa-edit fa-lg'
      },
    ]
  },
];
