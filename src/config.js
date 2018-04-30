export default {
    base: window.location.hostname === 'localhost' ? 'http://alex.taran.ru' : 'http://alex.taran.ru',
    api: {
        login: '/dashboard/auth/login',  // TODO POST: вход
        logout: '/dashboard/auth/logout',  // TODO GET: выход

        posts: '/dashboard/blog/posts', // TODO GET: список записей блога
        post: '/dashboard/blog/post', // TODO GET/PUT/PATCH/DELETE/POST: запись блога получить/обновить/обновить/удолить/создать

        categories: '/dashboard/blog/categories', // TODO GET: список категорий блога
        category: '/dashboard/blog/category',  // TODO GET/PUT/PATCH/DELETE/POST: категория блога, получить/обновить/обновить/удолить/создать

        tiles: '/dashboard/mainfeeds', // TODO GET: список плиток
        tile_types: '/dashboard/mainfeed/types', // TODO GET: список типов плиток
        tile: '/dashboard/mainfeed' // TODO GET/POST/PUT/DELETE: получить данные о плитке/создать/обновить/удолить
    }
}

// P: 123456
// U: example@example.com