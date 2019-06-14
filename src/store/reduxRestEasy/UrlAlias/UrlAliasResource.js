import {createResource} from '@brigad/redux-rest-easy';
import config from '../../../config';
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";

export const URL_ALIAS_RESOURCE_NAME = 'UrlAlias';

const Normalizer = new NormalizationPayload(URL_ALIAS_RESOURCE_NAME);


export const UrlAliasResource = createResource(URL_ALIAS_RESOURCE_NAME)({

  createUrlAlias: {
    method: 'POST',
    url: `${config.base}${config.api.url_alias}`,
    normalizer: (payload, resources, urlParams) => {
      console.log('createUrlAlias: ', payload, resources, urlParams);
      if (!payload ) {
        return null
      }
      if (payload.errors) {
        return Normalizer.normalizeError(payload);
      }

      if (resources.hasOwnProperty(URL_ALIAS_RESOURCE_NAME)) {
        return Normalizer.mergeResourceAndPayload(resources, [payload])
      } else {
        return Normalizer.payloadToResource([payload]);
      }
    },
    networkHelpers: {
      handleStatusCode,
      requestPOST: requestPOST
    },
  },
  deleteUrlAlias: {
    method: 'DELETE',
    url: `${config.base}${config.api.url_alias}/::id`,
    normalizer: DeleteNormalizer(Normalizer),
    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getUrlAlias: {
    method: 'GET',
    url: `${config.base}${config.api.url_alias}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getUrlAliases: {
    method: 'GET',
    url: `${config.base}${config.api.url_alias}`,
    normalizer: (payload) => {
      if (!payload && payload.error) {
        return null;
      }
      if (Array.isArray(payload)) {
        return Normalizer.payloadToResource(payload);
      } else {
        return Normalizer.payloadToResource(payload.data, payload);
      }
    },
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  updateUrlAlias: {
    method: 'PUT',
    url: `${config.base}${config.api.url_alias}/::id`,
    normalizer: (payload, resources) => {
      if (payload.errors) {
        return Normalizer.normalizeError(payload);
      }
      if (payload) {
        return Normalizer.updateResource(resources, payload);
      }
      return resources;
    },
    networkHelpers: {
      handleStatusCode,
      requestPUT: requestPUT,
    },
  },
});


const {
  actions: {
    createUrlAlias: {
      perform: CreateUrlAliasAction,
    },
    deleteUrlAlias: {
      perform: DeleteUrlAliasAction,
    },
    getUrlAlias: {
      perform: GetUrlAliasAction,
    },
    getUrlAliases: {
      perform: GetUrlAliasesAction,
    },
    updateUrlAlias: {
      perform: UpdateUrlAliasAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetUrlAliases,
      getResourceById: GetUrlAliasById,
    },
    createUrlAlias: {
      request: {
        getResource: CreateUrlAliasGetResource,
        isPerforming: isRetrievingCreateUrlAlias,
      }
    },
    deleteUrlAlias: {
      request: {
        getResource: DeleteUrlAliasGetResource,
      }
    },
    getUrlAlias: {
      request: {
        getResource: GetUrlAliasGetResource,
        isPerforming: isRetrievingGetUrlAlias,
      }
    },
    getUrlAliases: {
      request: {
        getResource: GetUrlAliassGetResource,
        isPerforming: isRetrievingGetUrlAliases,

      }
    },
    updateUrlAlias: {
      request: {
        getResource: UpdateUrlAliasGetResource,
        isPerforming: isRetrievingUpdateUrlAlias,
      }
    },
  }
} = UrlAliasResource;

export {
  CreateUrlAliasAction,
  DeleteUrlAliasAction,
  GetUrlAliasAction,
  GetUrlAliasesAction,
  UpdateUrlAliasAction,

  CreateUrlAliasGetResource,
  DeleteUrlAliasGetResource,
  GetUrlAliasGetResource,
  GetUrlAliassGetResource,
  UpdateUrlAliasGetResource,
  isRetrievingGetUrlAlias,
  isRetrievingGetUrlAliases,
  GetUrlAliases,
  GetUrlAliasById,

  isRetrievingUpdateUrlAlias,
  isRetrievingCreateUrlAlias,
}
