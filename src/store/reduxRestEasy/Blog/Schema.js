import {schema, normalize} from 'normalizr';

// data: [{}]
// current_page: 1
// first_page_url: "http://strikepro.ru/dashboard/blog/posts?page=1"
// from: 1
// last_page: 2
// last_page_url: "http://strikepro.ru/dashboard/blog/posts?page=2"
// next_page_url: "http://strikepro.ru/dashboard/blog/posts?page=2"
// path: "http://strikepro.ru/dashboard/blog/posts"
// per_page: 20
// prev_page_url: null
// to: 20
// total: 30

const data = new schema.Entity('posts');
const current_page = new schema.Entity('current_page');
const first_page_url = new schema.Entity('first_page_url');
const from = new schema.Entity('from');
const last_page = new schema.Entity('last_page');
const last_page_url = new schema.Entity('last_page_url');
const next_page_url = new schema.Entity('next_page_url');
const path = new schema.Entity('path');
const per_page = new schema.Entity('per_page');
const prev_page_url = new schema.Entity('prev_page_url');
const to = new schema.Entity('to');
const total = new schema.Entity('total');

export const BlogPosts = new schema.Entity('meta',{
  current_page,
  first_page_url,
  from,
  last_page,
  last_page_url,
  next_page_url,
  path,
  per_page,
  prev_page_url,
  to,
  total,
  data: [data],
},{
  idAttribute: () => 'current_page'
});

export default BlogPosts;
