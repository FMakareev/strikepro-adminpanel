export default {
  base: window.location.hostname === 'localhost' ? 'https://dev.strikepro.ru' : '',
  api: {
    login: '/dashboard/auth/login',
    logout: '/dashboard/auth/logout',

    posts: '/dashboard/blog/posts',
    post: '/dashboard/blog/post',

    categories: '/dashboard/blog/categories',
    category: '/dashboard/blog/category',

    slides: '/dashboard/slides',

    tiles: '/dashboard/mainfeeds',

    tile_types: '/dashboard/mainfeed/types',
    tile: '/dashboard/mainfeed',

    nomenclature: '/dashboard/nomenclature',
    nomenclatures: '/dashboard/nomenclatures',

    nomenclatureCharacteristic: '/dashboard/nomenclature/characteristic',
    typesOfNomenclature: '/dashboard/nomenclature/characteristic',
    fileupload: '/dashboard/fileupload',

    static_pages: '/dashboard/pages',
  }
}
