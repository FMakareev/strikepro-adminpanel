import {createResource} from '@brigad/redux-rest-easy';
import config from '../../../config';
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";

const RESOURCE_NAME = 'typesOfNomenclature';

const Normalizer = new NormalizationPayload(RESOURCE_NAME);


export const TypesOfNomenclatureResource = createResource(RESOURCE_NAME)({

  createTypesOfNomenclature: {
    method: 'POST',
    url: `${config.base}${config.api.typesOfNomenclature}`,
    normalizer: (payload, resources, urlParams) => {
      console.log('createTypesOfNomenclature: ', payload, resources, urlParams);
      if (!payload ) {
        return null
      }
      if (payload.errors) {
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
  deleteTypesOfNomenclature: {
    method: 'DELETE',
    url: `${config.base}${config.api.typesOfNomenclature}/::id`,
    normalizer: DeleteNormalizer(Normalizer),

    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getTypesOfNomenclature: {
    method: 'GET',
    url: `${config.base}${config.api.typesOfNomenclature}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getTypesOfNomenclatures: {
    method: 'GET',
    url: `${config.base}${config.api.typesOfNomenclature}`,
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
  updateTypesOfNomenclature: {
    method: 'PUT',
    url: `${config.base}${config.api.typesOfNomenclature}/::id`,
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
    createTypesOfNomenclature: {
      perform: CreateTypesOfNomenclatureAction,
    },
    deleteTypesOfNomenclature: {
      perform: DeleteTypesOfNomenclatureAction,
    },
    getTypesOfNomenclature: {
      perform: GetTypesOfNomenclatureAction,
    },
    getTypesOfNomenclatures: {
      perform: GetTypesOfNomenclaturesAction,
    },
    updateTypesOfNomenclature: {
      perform: UpdateTypesOfNomenclatureAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetTypesOfNomenclatures,
      getResourceById: GetTypesOfNomenclatureById,
    },
    createTypesOfNomenclature: {
      request: {
        getResource: CreateTypesOfNomenclatureGetResource,
        isPerforming: isRetrievingCreateTypesOfNomenclature,
      }
    },
    deleteTypesOfNomenclature: {
      request: {
        getResource: DeleteTypesOfNomenclatureGetResource,
      }
    },
    getTypesOfNomenclature: {
      request: {
        getResource: GetTypesOfNomenclatureGetResource,
        isPerforming: isRetrievingGetTypesOfNomenclature,
      }
    },
    getTypesOfNomenclatures: {
      request: {
        getResource: GetTypesOfNomenclaturesGetResource,
        isPerforming: isRetrievingGetTypesOfNomenclatures,

      }
    },
    updateTypesOfNomenclature: {
      request: {
        getResource: UpdateTypesOfNomenclatureGetResource,
        isPerforming: isRetrievingUpdateTypesOfNomenclature,
      }
    },
  }
} = TypesOfNomenclatureResource;

export {
  CreateTypesOfNomenclatureAction,
  DeleteTypesOfNomenclatureAction,
  GetTypesOfNomenclatureAction,
  GetTypesOfNomenclaturesAction,
  UpdateTypesOfNomenclatureAction,

  CreateTypesOfNomenclatureGetResource,
  DeleteTypesOfNomenclatureGetResource,
  GetTypesOfNomenclatureGetResource,
  GetTypesOfNomenclaturesGetResource,
  UpdateTypesOfNomenclatureGetResource,
  isRetrievingGetTypesOfNomenclature,
  isRetrievingGetTypesOfNomenclatures,
  GetTypesOfNomenclatures,
  GetTypesOfNomenclatureById,

  isRetrievingUpdateTypesOfNomenclature,
  isRetrievingCreateTypesOfNomenclature,
}
