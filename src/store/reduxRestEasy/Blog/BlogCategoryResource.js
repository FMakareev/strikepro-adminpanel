import {createResource} from '@brigad/redux-rest-easy';
import config from '../../../config';
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {
  NormalizationPayload,
} from "../.helpers/ResourceHelper";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";

const RESOURCE_NAME = 'categories';

const Normalizer = new NormalizationPayload(RESOURCE_NAME);

export const BlogCategoryResource = createResource(RESOURCE_NAME)({
  createCategory: {
    method: 'POST',
    url: `${config.base}${config.api.category}`,
    normalizer: (payload, resources) => {
      if (!payload && payload.error) {
        return null;
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
  deleteCategory: {
    method: 'DELETE',
    url: `${config.base}${config.api.category}/::id`,
    normalizer: DeleteNormalizer(Normalizer),
    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getCategory: {
    method: 'GET',
    url: `${config.base}${config.api.category}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getCategories: {
    method: 'GET',
    url: `${config.base}${config.api.categories}`,
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
      requestGET: requestGET
    },
  },
  updateCategory: {
    method: 'PUT',
    url: `${config.base}${config.api.category}/::id`,
    normalizer: (payload, resources) => {
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
    createCategory: {
      perform: CreateCategoryAction,
    },
    deleteCategory: {
      perform: DeleteCategoryAction,
    },
    getCategory: {
      perform: GetCategoryAction,
    },
    getCategories: {
      perform: GetCategoriesAction,
    },
    updateCategory: {
      perform: UpdateCategoryAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetCategories,
      getResourceById: GetCategoryById,
    },
    createCategory: {
      request: {
        getResource: CreateCategoryGetResource,
        isPerforming: isRetrievingCreateCategory,
      }
    },
    deleteCategory: {
      request: {
        getResource: DeleteCategoryGetResource,
      }
    },
    getCategory: {
      request: {
        getResource: GetCategoryGetResource,
        isPerforming: isRetrievingGetCategory,

      }
    },
    getCategories: {
      request: {
        getResource: GetCategoriesGetResource,
        isPerforming: isRetrievingCategories,

      }
    },
    updateCategory: {
      request: {
        getResource: UpdateCategoryGetResource,
        isPerforming: isRetrievingUpdateCategory,

      }
    },
  }
} = BlogCategoryResource;

export {
  CreateCategoryAction,
  DeleteCategoryAction,
  GetCategoryAction,
  GetCategoriesAction,
  UpdateCategoryAction,

  CreateCategoryGetResource,
  DeleteCategoryGetResource,
  GetCategoryGetResource,
  GetCategoriesGetResource,
  UpdateCategoryGetResource,
  GetCategories,
  GetCategoryById,
  isRetrievingCategories,

  isRetrievingGetCategory,
  isRetrievingCreateCategory,
  isRetrievingUpdateCategory,
}
