import {createResource} from '@brigad/redux-rest-easy';
import config from '../../../config';
import {normalize} from 'normalizr';
import {user} from "./Schema";
import BrowserHistory from "../../../history";
import {requestPOST} from "../.helpers/networkHelpers";


export const AuthResource = createResource('authResource',)({
  login: {
    method: 'POST',
    url: `${config.base}${config.api.login}`,
    networkHelpers: {
      handleStatusCode: (props) => {
        if (props.status === 200) {
          BrowserHistory.push('/');
<<<<<<< HEAD
=======
          window.location.reload();
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
        }
      },
      requestPOST: requestPOST,
    },
    normalizer: (response) => {
      if (response.errors) {
        return {
          entities: {
            ...response,
            message: [response.message]
          },
          result: {errors: response}
        };
      } else {
        return normalize(response, user);
      }
    },
    afterHook: (
      normalizedPayload,) => {
      if (normalizedPayload.user) {
        localStorage.setItem('user', JSON.stringify(normalizedPayload.user));
      }
    },
  },
  logout: {
    method: 'GET',
    url: `${config.base}${config.api.logout}`,
    afterHook: () => {
      localStorage.clear();
    },
  },
});
console.log(AuthResource);
const {
  actions: {
    login: {
      perform: LoginAction,
    },
    logout: {
      perform: LogoutAction,
    }
  },
  selectors: {
    resource: {
      getResource: AuthGetResource,
    },
    login: {
      request: {
        getResource: LoginGetResource
      }
    },
    logout: {
      request: {
        getResource: LooutGetResource
      }
    }
  },
} = AuthResource;

export {
  LoginAction,
  LogoutAction,
  LoginGetResource,
  LooutGetResource,

  AuthGetResource,
}
