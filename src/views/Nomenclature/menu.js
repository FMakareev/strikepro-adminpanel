export const MenuNomenclature = [
  {
    title: true,
    name: 'Номенклатура',
    wrapper: {
      element: "span",
      attributes: {}
    },
    class: ""
  },

  {
    name: 'Номенклатура',
    url: '/nomenclature-list',
    icon: 'fa fa-list fa-lg'
  },
  {
    name: 'Создать номенклатуру',
    url: '/nomenclature-editor',
    icon: 'fa fa-edit fa-lg'
  },

  {
    name: 'Виды номенклатуры',
    url: '/nomenclature-type-list',
    icon: 'fa fa-list fa-lg'
  },
  {
    name: 'Создать вид номенклатуры',
    url: '/nomenclature-type-editor',
    icon: 'fa fa-edit fa-lg'
  },

  {
    name: 'Характиеристики номенклатуры',
    url: '/nomenclature-characteristics-list',
    icon: 'fa fa-list fa-lg'
  },
  {
    name: 'Создать характеристику номенклатуры',
    url: '/nomenclature-characteristics-editor',
    icon: 'fa fa-edit fa-lg'
  },
]