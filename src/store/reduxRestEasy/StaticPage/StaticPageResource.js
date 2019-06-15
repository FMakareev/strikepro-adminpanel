import {createResource} from '@brigad/redux-rest-easy';
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import config from "../../../config";
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";
import {hasOwnProperty} from "../../../helpers/hasOwnProperty";


export const STATIC_PAGE_RESOURCE_NAME = 'staticPage';

const Normalizer = new NormalizationPayload(STATIC_PAGE_RESOURCE_NAME);


export const StaticPageResource = createResource(STATIC_PAGE_RESOURCE_NAME)({
  createStaticPage: {
    method: 'POST',
    url: `${config.base}${config.api.static_pages}`,
    normalizer: (payload, resources, urlParams) => {
      if (!payload ) {
        return null
      }
      if (payload.errors || payload.message) {
        return Normalizer.normalizeError(payload);
      }

      if (hasOwnProperty(resources, STATIC_PAGE_RESOURCE_NAME)) {
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
  deleteStaticPage: {
    method: 'DELETE',
    url: `${config.base}${config.api.static_pages}/::id`,
    normalizer: DeleteNormalizer(Normalizer),
    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getStaticPage: {
    method: 'GET',
    url: `${config.base}${config.api.static_pages}/::id`,
    normalizer: (payload) => {
      console.log(payload);
      return Normalizer.payloadToResource([payload])
    },
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getStaticPages: {
    method: 'GET',
    url: `${config.base}${config.api.static_pages}`,
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
  updateStaticPage: {
    method: 'PUT',
    url: `${config.base}${config.api.static_pages}/::id`,
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
    createStaticPage: {
      perform: CreateStaticPageAction,
    },
    deleteStaticPage: {
      perform: DeleteStaticPageAction,
    },
    getStaticPage: {
      perform: GetStaticPageAction,
    },
    getStaticPages: {
      perform: GetStaticPagesAction,
    },
    updateStaticPage: {
      perform: UpdateStaticPageAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetStaticPages,
      getResourceById: GetStaticPageById,
    },
    createStaticPage: {
      request: {
        getResource: CreateStaticPageGetResource,
        isPerforming: isRetrievingCreateStaticPage,
      }
    },
    deleteStaticPage: {
      request: {
        getResource: DeleteStaticPageGetResource,
      }
    },
    getStaticPage: {
      request: {
        getResource: GetStaticPageGetResource,
        isPerforming: isRetrievingGetStaticPage,
      }
    },
    getStaticPages: {
      request: {
        getResource: GetStaticPagesGetResource,
        isPerforming: isRetrievingGetStaticPages,
      }
    },
    updateStaticPage: {
      request: {
        getResource: UpdateStaticPageGetResource,
        isPerforming: isRetrievingUpdateStaticPage,
      }
    },
  }
} = StaticPageResource;

export {
  CreateStaticPageAction,
  DeleteStaticPageAction,
  GetStaticPageAction,
  GetStaticPagesAction,
  UpdateStaticPageAction,

  CreateStaticPageGetResource,
  DeleteStaticPageGetResource,
  GetStaticPageGetResource,
  GetStaticPagesGetResource,
  UpdateStaticPageGetResource,
  isRetrievingGetStaticPage,
  isRetrievingGetStaticPages,
  GetStaticPages,
  GetStaticPageById,

  isRetrievingUpdateStaticPage,
  isRetrievingCreateStaticPage,
}
