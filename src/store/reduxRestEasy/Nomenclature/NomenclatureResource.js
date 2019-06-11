import {createResource} from '@brigad/redux-rest-easy';
import config from '../../../config';
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";

const RESOURCE_NAME = 'nomenclatures';

const Normalizer = new NormalizationPayload(RESOURCE_NAME);


export const NomenclatureResource = createResource(RESOURCE_NAME)({

  createNomenclature: {
    method: 'POST',
    url: `${config.base}${config.api.nomenclature}`,
    normalizer: (payload, resources, urlParams) => {
      console.log('createNomenclature: ', payload, resources, urlParams);
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
  deleteNomenclature: {
    method: 'DELETE',
    url: `${config.base}${config.api.nomenclature}/::id`,
    normalizer: DeleteNormalizer(Normalizer),
    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getNomenclature: {
    method: 'GET',
    url: `${config.base}${config.api.nomenclature}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getNomenclatures: {
    method: 'GET',
    url: `${config.base}${config.api.nomenclatures}`,
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
  updateNomenclature: {
    method: 'PUT',
    url: `${config.base}${config.api.nomenclature}/::id`,
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
    createNomenclature: {
      perform: CreateNomenclatureAction,
    },
    deleteNomenclature: {
      perform: DeleteNomenclatureAction,
    },
    getNomenclature: {
      perform: GetNomenclatureAction,
    },
    getNomenclatures: {
      perform: GetNomenclaturesAction,
    },
    updateNomenclature: {
      perform: UpdateNomenclatureAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetNomenclatures,
      getResourceById: GetNomenclatureById,
    },
    createNomenclature: {
      request: {
        getResource: CreateNomenclatureGetResource,
        isPerforming: isRetrievingCreateNomenclature,
      }
    },
    deleteNomenclature: {
      request: {
        getResource: DeleteNomenclatureGetResource,
      }
    },
    getNomenclature: {
      request: {
        getResource: GetNomenclatureGetResource,
        isPerforming: isRetrievingGetNomenclature,
      }
    },
    getNomenclatures: {
      request: {
        getResource: GetNomenclaturesGetResource,
        isPerforming: isRetrievingGetNomenclatures,

      }
    },
    updateNomenclature: {
      request: {
        getResource: UpdateNomenclatureGetResource,
        isPerforming: isRetrievingUpdateNomenclature,
      }
    },
  }
} = NomenclatureResource;

export {
  CreateNomenclatureAction,
  DeleteNomenclatureAction,
  GetNomenclatureAction,
  GetNomenclaturesAction,
  UpdateNomenclatureAction,

  CreateNomenclatureGetResource,
  DeleteNomenclatureGetResource,
  GetNomenclatureGetResource,
  GetNomenclaturesGetResource,
  UpdateNomenclatureGetResource,
  isRetrievingGetNomenclature,
  isRetrievingGetNomenclatures,
  GetNomenclatures,
  GetNomenclatureById,

  isRetrievingUpdateNomenclature,
  isRetrievingCreateNomenclature,
}
