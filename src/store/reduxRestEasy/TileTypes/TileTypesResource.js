import {createResource} from '@brigad/redux-rest-easy';
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import config from "../../../config";
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";


export const TILE_TYPES_RESOURCE_NAME = 'tileTypes';

const Normalizer = new NormalizationPayload(TILE_TYPES_RESOURCE_NAME);


export const TileTypesResource = createResource(TILE_TYPES_RESOURCE_NAME)({
  createTileType: {
    method: 'POST',
    url: `${config.base}${config.api.tile_types}`,
    normalizer: (payload, resources, urlParams) => {
      if (!payload) {
        return null
      }
      if (payload.errors) {
        return Normalizer.normalizeError(payload);
      }

      if (resources.hasOwnProperty(TILE_TYPES_RESOURCE_NAME)) {
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
  deleteTileType: {
    method: 'DELETE',
    url: `${config.base}${config.api.tile_types}/::id`,
    normalizer: DeleteNormalizer(Normalizer),

    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getTileType: {
    method: 'GET',
    url: `${config.base}${config.api.tile_types}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getTileTypes: {
    method: 'GET',
    url: `${config.base}${config.api.tile_types}`,
    normalizer: (payload) => {
      if (!payload && payload.error) {
        return null;
      }
      if (Array.isArray(payload)) {
        return Normalizer.payloadToResource(payload.map((item,index) => ({id: index, name: item})));
      } else {
        return Normalizer.payloadToResource(payload.data, payload);
      }
    },
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  updateTileType: {
    method: 'PUT',
    url: `${config.base}${config.api.tile_types}/::id`,
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
    createTileType: {
      perform: CreateTileTypeAction,
    },
    deleteTileType: {
      perform: DeleteTileTypeAction,
    },
    getTileType: {
      perform: GetTileTypeAction,
    },
    getTileTypes: {
      perform: GetTileTypesAction,
    },
    updateTileType: {
      perform: UpdateTileTypeAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetTileTypes,
      getResourceById: GetTileTypeById,
    },
    createTileType: {
      request: {
        getResource: CreateTileTypeGetResource,
        isPerforming: isRetrievingCreateTileType,
      }
    },
    deleteTileType: {
      request: {
        getResource: DeleteTileTypeGetResource,
      }
    },
    getTileType: {
      request: {
        getResource: GetTileTypeGetResource,
        isPerforming: isRetrievingGetTileType,
      }
    },
    getTileTypes: {
      request: {
        getResource: GetTileTypesGetResource,
        isPerforming: isRetrievingGetTileTypes,
      }
    },
    updateTileType: {
      request: {
        getResource: UpdateTileTypeGetResource,
        isPerforming: isRetrievingUpdateTileType,
      }
    },
  }
} = TileTypesResource;

export {
  CreateTileTypeAction,
  DeleteTileTypeAction,
  GetTileTypeAction,
  GetTileTypesAction,
  UpdateTileTypeAction,

  CreateTileTypeGetResource,
  DeleteTileTypeGetResource,
  GetTileTypeGetResource,
  GetTileTypesGetResource,
  UpdateTileTypeGetResource,
  isRetrievingGetTileType,
  isRetrievingGetTileTypes,
  GetTileTypes,
  GetTileTypeById,

  isRetrievingUpdateTileType,
  isRetrievingCreateTileType,
}
