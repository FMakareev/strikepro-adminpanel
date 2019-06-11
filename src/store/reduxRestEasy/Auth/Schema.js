import {schema} from 'normalizr';



const message = new schema.Entity('message');
export const user = new schema.Entity('user');

const email = new schema.Entity('email');
const password = new schema.Entity('password');

const Errors = new schema.Entity('errors', {
  email: [email],
  password: [password]
}, {
  idAttribute: () => 'errors'
});


export const AuthResponseFailed = new schema.Entity('message', {
  message: message,
  errors: Errors,
},{
  idAttribute: () => 'message'
});

export const LoginResponseFailed = new schema.Entity('login', {
  response: AuthResponseFailed,
},{
  idAttribute: () => 'login'
});

