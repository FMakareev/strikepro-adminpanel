export const MenuTile = [
  {
<<<<<<< HEAD
    title: true,
    name: 'Плитки',
    wrapper: {
      element: "span",
      attributes: {}
    },
    class: ""
  },
  {
    name: 'Список плиток',
    url: '/tile-list',
    icon: 'fa fa-list fa-lg'
  },
  {
    name: 'Создать плитку',
    url: '/tile-editor',
    icon: 'fa fa-edit fa-lg'
  },
]
=======
    name: 'Список плиток',
    icon: 'd-none',
    children: [
      {
        name: 'Список плиток',
        url: '/tile-list',
        icon: 'fa fa-list fa-lg'
      },
      {
        name: 'Создать плитку',
        url: '/tile-editor',
        icon: 'fa fa-edit fa-lg'
      },
    ]
  },
];
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
