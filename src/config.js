

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

    nomenclature: '/dashboard/nomenclature',
    nomenclatures: '/dashboard/nomenclatures',

    nomenclatureCharacteristic: '/dashboard/nomenclature/characteristic',
    typesOfNomenclature: '/dashboard/nomenclature/characteristic',
    fileupload: '/dashboard/fileupload',

    static_pages: '/dashboard/pages',
    url_alias: '/dashboard/url_alias',
    feedback: '/dashboard/feedback',
  }
}
