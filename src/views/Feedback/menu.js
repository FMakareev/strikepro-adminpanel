import {FormattedMessage} from "react-intl";
import React from "react";

export const FeedbackMenu = [
  {

    name: (<FormattedMessage
      id='module.name.feedback'
    />),
    icon: 'd-none',
    children: [
      {
        name: (<FormattedMessage
          id='feedback.list.title'
        />),
        url: '/feedback/list',
        icon: 'fa fa-list fa-lg'
      },
    ]
  },
];
