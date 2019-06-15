import {createResource} from '@brigad/redux-rest-easy';
import config from '../../../config';
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";
import {hasOwnProperty} from "../../../helpers/hasOwnProperty";

const RESOURCE_NAME = 'nomenclatureCharacteristic';

const Normalizer = new NormalizationPayload(RESOURCE_NAME);


export const NomenclatureCharacteristicResource = createResource(RESOURCE_NAME)({

  createNomenclatureCharacteristic: {
    method: 'POST',
    url: `${config.base}${config.api.nomenclatureCharacteristic}`,
    normalizer: (payload, resources, urlParams) => {
      console.log('createNomenclatureCharacteristic: ', payload, resources, urlParams);
      if (!payload ) {
        return null
      }
      if (payload.errors) {
        return Normalizer.normalizeError(payload);
      }

      if (hasOwnProperty(resources,RESOURCE_NAME)) {
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
  deleteNomenclatureCharacteristic: {
    method: 'DELETE',
    url: `${config.base}${config.api.nomenclatureCharacteristic}/::id`,
    normalizer: DeleteNormalizer(Normalizer),

    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getNomenclatureCharacteristic: {
    method: 'GET',
    url: `${config.base}${config.api.nomenclatureCharacteristic}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getNomenclatureCharacteristics: {
    method: 'GET',
    url: `${config.base}${config.api.nomenclatureCharacteristic}`,
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
  updateNomenclatureCharacteristic: {
    method: 'PUT',
    url: `${config.base}${config.api.nomenclatureCharacteristic}/::id`,
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
    createNomenclatureCharacteristic: {
      perform: CreateNomenclatureCharacteristicAction,
    },
    deleteNomenclatureCharacteristic: {
      perform: DeleteNomenclatureCharacteristicAction,
    },
    getNomenclatureCharacteristic: {
      perform: GetNomenclatureCharacteristicAction,
    },
    getNomenclatureCharacteristics: {
      perform: GetNomenclatureCharacteristicsAction,
    },
    updateNomenclatureCharacteristic: {
      perform: UpdateNomenclatureCharacteristicAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetNomenclatureCharacteristics,
      getResourceById: GetNomenclatureCharacteristicById,
    },
    createNomenclatureCharacteristic: {
      request: {
        getResource: CreateNomenclatureCharacteristicGetResource,
        isPerforming: isRetrievingCreateNomenclatureCharacteristic,
      }
    },
    deleteNomenclatureCharacteristic: {
      request: {
        getResource: DeleteNomenclatureCharacteristicGetResource,
      }
    },
    getNomenclatureCharacteristic: {
      request: {
        getResource: GetNomenclatureCharacteristicGetResource,
        isPerforming: isRetrievingGetNomenclatureCharacteristic,
      }
    },
    getNomenclatureCharacteristics: {
      request: {
        getResource: GetNomenclatureCharacteristicsGetResource,
        isPerforming: isRetrievingGetNomenclatureCharacteristics,

      }
    },
    updateNomenclatureCharacteristic: {
      request: {
        getResource: UpdateNomenclatureCharacteristicGetResource,
        isPerforming: isRetrievingUpdateNomenclatureCharacteristic,
      }
    },
  }
} = NomenclatureCharacteristicResource;

export {
  CreateNomenclatureCharacteristicAction,
  DeleteNomenclatureCharacteristicAction,
  GetNomenclatureCharacteristicAction,
  GetNomenclatureCharacteristicsAction,
  UpdateNomenclatureCharacteristicAction,

  CreateNomenclatureCharacteristicGetResource,
  DeleteNomenclatureCharacteristicGetResource,
  GetNomenclatureCharacteristicGetResource,
  GetNomenclatureCharacteristicsGetResource,
  UpdateNomenclatureCharacteristicGetResource,
  isRetrievingGetNomenclatureCharacteristic,
  isRetrievingGetNomenclatureCharacteristics,
  GetNomenclatureCharacteristics,
  GetNomenclatureCharacteristicById,

  isRetrievingUpdateNomenclatureCharacteristic,
  isRetrievingCreateNomenclatureCharacteristic,
}
