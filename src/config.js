<<<<<<< HEAD
export default {
  //base: window.location.hostname === 'localhost' ? 'https://dev.strikepro.ru' : '',
  base: 'https://dev.strikepro.ru',
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

=======


let base = '';

switch (window.location.hostname) {
  case ('localhost'):{
    base = 'https://dev.strikepro.ru';
    break;
  }
  case ('admin.strikepro.ru'):{
    base = 'https://dev.strikepro.ru';
    break;
  }
  case ('strike.localhost'):{
    base = 'http://strike.localhost';
    break;
  }
}



export default {
  base,
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

>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
    nomenclature: '/dashboard/nomenclature',
    nomenclatures: '/dashboard/nomenclatures',

    nomenclatureCharacteristic: '/dashboard/nomenclature/characteristic',
    typesOfNomenclature: '/dashboard/nomenclature/characteristic',
    fileupload: '/dashboard/fileupload',
<<<<<<< HEAD
=======

    static_pages: '/dashboard/pages',
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
  }
}
