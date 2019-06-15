import {createResource} from '@brigad/redux-rest-easy';
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import config from "../../../config";
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";
import {hasOwnProperty} from "../../../helpers/hasOwnProperty";


export const TILES_RESOURCE_NAME = 'tiles';

const Normalizer = new NormalizationPayload(TILES_RESOURCE_NAME);


export const TilesResource = createResource(TILES_RESOURCE_NAME)({
  createTile: {
    method: 'POST',
    url: `${config.base}${config.api.tile}`,
    normalizer: (payload, resources, urlParams, query, body, otherArgs) => {
      console.log('createTile: ', payload, resources, urlParams,query, body, otherArgs);
      if (!payload ) {
        return null
      }
      if (payload.errors || payload.message) {
        return Normalizer.normalizeError(payload);
      }

      if (hasOwnProperty(resources,TILES_RESOURCE_NAME)) {
        return Normalizer.mergeResourceAndPayload(resources, [payload])
      } else {
        return Normalizer.payloadToResource([payload]);
      }
    },
    networkHelpers: {
      handleStatusCode:(response)=>{
        handleStatusCode(response)
      },
      requestPOST: requestPOST
    },
  },
  deleteTile: {
    method: 'DELETE',
    url: `${config.base}${config.api.tile}/::id`,
    normalizer: DeleteNormalizer(Normalizer),
    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getTile: {
    method: 'GET',
    url: `${config.base}${config.api.tile}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getTiles: {
    method: 'GET',
    url: `${config.base}${config.api.tiles}`,
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
  updateTile: {
    method: 'PUT',
    url: `${config.base}${config.api.tile}/::id`,
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
    createTile: {
      perform: CreateTileAction,
    },
    deleteTile: {
      perform: DeleteTileAction,
    },
    getTile: {
      perform: GetTileAction,
    },
    getTiles: {
      perform: GetTilesAction,
    },
    updateTile: {
      perform: UpdateTileAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetTiles,
      getResourceById: GetTileById,
    },
    createTile: {
      request: {
        getResource: CreateTileGetResource,
        isPerforming: isRetrievingCreateTile,
      }
    },
    deleteTile: {
      request: {
        getResource: DeleteTileGetResource,
      }
    },
    getTile: {
      request: {
        getResource: GetTileGetResource,
        isPerforming: isRetrievingGetTile,
      }
    },
    getTiles: {
      request: {
        getResource: GetTilesGetResource,
        isPerforming: isRetrievingGetTiles,
      }
    },
    updateTile: {
      request: {
        getResource: UpdateTileGetResource,
        isPerforming: isRetrievingUpdateTile,
      }
    },
  }
} = TilesResource;

export {
  CreateTileAction,
  DeleteTileAction,
  GetTileAction,
  GetTilesAction,
  UpdateTileAction,

  CreateTileGetResource,
  DeleteTileGetResource,
  GetTileGetResource,
  GetTilesGetResource,
  UpdateTileGetResource,
  isRetrievingGetTile,
  isRetrievingGetTiles,
  GetTiles,
  GetTileById,

  isRetrievingUpdateTile,
  isRetrievingCreateTile,
}
