import {createResource} from '@brigad/redux-rest-easy';
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import config from "../../../config";
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";


const RESOURCE_NAME = 'slides';

const Normalizer = new NormalizationPayload(RESOURCE_NAME);


export const SlidesResource = createResource(RESOURCE_NAME)({
  createSlide: {
    method: 'POST',
    url: `${config.base}${config.api.slides}`,
    normalizer: (payload, resources, urlParams) => {
      if (!payload ) {
        return null
      }
      if (payload.errors || payload.message) {
        return Normalizer.normalizeError(payload);
      }

      if (resources.hasOwnProperty(RESOURCE_NAME)) {
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
  deleteSlide: {
    method: 'DELETE',
    url: `${config.base}${config.api.slides}/::id`,
    normalizer: DeleteNormalizer(Normalizer),
    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getSlide: {
    method: 'GET',
    url: `${config.base}${config.api.slides}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getSlides: {
    method: 'GET',
    url: `${config.base}${config.api.slides}`,
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
  updateSlide: {
    method: 'PUT',
    url: `${config.base}${config.api.slides}/::id`,
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
    createSlide: {
      perform: CreateSlideAction,
    },
    deleteSlide: {
      perform: DeleteSlideAction,
    },
    getSlide: {
      perform: GetSlideAction,
    },
    getSlides: {
      perform: GetSlidesAction,
    },
    updateSlide: {
      perform: UpdateSlideAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetSlides,
      getResourceById: GetSlideById,
    },
    createSlide: {
      request: {
        getResource: CreateSlideGetResource,
        isPerforming: isRetrievingCreateSlide,
      }
    },
    deleteSlide: {
      request: {
        getResource: DeleteSlideGetResource,
      }
    },
    getSlide: {
      request: {
        getResource: GetSlideGetResource,
        isPerforming: isRetrievingGetSlide,
      }
    },
    getSlides: {
      request: {
        getResource: GetSlidesGetResource,
        isPerforming: isRetrievingGetSlides,
      }
    },
    updateSlide: {
      request: {
        getResource: UpdateSlideGetResource,
        isPerforming: isRetrievingUpdateSlide,
      }
    },
  }
} = SlidesResource;

export {
  CreateSlideAction,
  DeleteSlideAction,
  GetSlideAction,
  GetSlidesAction,
  UpdateSlideAction,

  CreateSlideGetResource,
  DeleteSlideGetResource,
  GetSlideGetResource,
  GetSlidesGetResource,
  UpdateSlideGetResource,
  isRetrievingGetSlide,
  isRetrievingGetSlides,
  GetSlides,
  GetSlideById,

  isRetrievingUpdateSlide,
  isRetrievingCreateSlide,
}
