import {createResource} from '@brigad/redux-rest-easy';
import config from '../../../config';
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";
import {hasOwnProperty} from "../../../helpers/hasOwnProperty";
import React from "react";

export const FEEDBACK_RESOURCE_NAME = 'Feedback';

const Normalizer = new NormalizationPayload(FEEDBACK_RESOURCE_NAME);


export const FeedbackResource = createResource(FEEDBACK_RESOURCE_NAME)({

  createFeedback: {
    method: 'POST',
    url: `${config.base}${config.api.feedback}`,
    normalizer: (payload, resources, urlParams) => {
      console.log('createFeedback: ', payload, resources, urlParams);
      if (!payload ) {
        return null
      }
      if (payload.errors) {
        return Normalizer.normalizeError(payload);
      }

      if (hasOwnProperty(resources,FEEDBACK_RESOURCE_NAME)) {
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
  deleteFeedback: {
    method: 'DELETE',
    url: `${config.base}${config.api.feedback}/::id`,
    normalizer: DeleteNormalizer(Normalizer),
    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getFeedback: {
    method: 'GET',
    url: `${config.base}${config.api.feedback}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getFeedbackList: {
    method: 'GET',
    url: `${config.base}${config.api.feedback}`,
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
  updateFeedback: {
    method: 'PUT',
    url: `${config.base}${config.api.feedback}/::id`,
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
    createFeedback: {
      perform: CreateFeedbackAction,
    },
    deleteFeedback: {
      perform: DeleteFeedbackAction,
    },
    getFeedback: {
      perform: GetFeedbackAction,
    },
    getFeedbackList: {
      perform: GetFeedbackListAction,
    },
    updateFeedback: {
      perform: UpdateFeedbackAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetFeedbackList,
      getResourceById: GetFeedbackById,
    },
    createFeedback: {
      request: {
        getResource: CreateFeedbackGetResource,
        isPerforming: isRetrievingCreateFeedback,
      }
    },
    deleteFeedback: {
      request: {
        getResource: DeleteFeedbackGetResource,
      }
    },
    getFeedback: {
      request: {
        getResource: GetFeedbackGetResource,
        isPerforming: isRetrievingGetFeedback,
      }
    },
    getFeedbackList: {
      request: {
        getResource: GetFeedbackListGetResource,
        isPerforming: isRetrievingGetFeedbackList,

      }
    },
    updateFeedback: {
      request: {
        getResource: UpdateFeedbackGetResource,
        isPerforming: isRetrievingUpdateFeedback,
      }
    },
  }
} = FeedbackResource;

export {
  CreateFeedbackAction,
  DeleteFeedbackAction,
  GetFeedbackAction,
  GetFeedbackListAction,
  UpdateFeedbackAction,

  CreateFeedbackGetResource,
  DeleteFeedbackGetResource,
  GetFeedbackGetResource,
  GetFeedbackListGetResource,
  UpdateFeedbackGetResource,
  isRetrievingGetFeedback,
  isRetrievingGetFeedbackList,
  GetFeedbackList,
  GetFeedbackById,

  isRetrievingUpdateFeedback,
  isRetrievingCreateFeedback,
}

//    id
//    name
//    email
//    telephone
//    message
//    status
//    created_at
