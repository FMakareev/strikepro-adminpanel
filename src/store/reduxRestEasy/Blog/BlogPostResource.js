import {createResource} from '@brigad/redux-rest-easy';
import config from '../../../config';
import {handleStatusCode} from "../.helpers/handleStatusCode";
import {requestDELETE, requestGET, requestPOST, requestPUT} from "../.helpers/networkHelpers";
import {NormalizationPayload} from "../.helpers/ResourceHelper";
import {DeleteNormalizer} from "../.helpers/normalizerHelpers";
import {hasOwnProperty} from "../../../helpers/hasOwnProperty";

const RESOURCE_NAME = 'posts';

const Normalizer = new NormalizationPayload(RESOURCE_NAME);


export const BlogPostResource = createResource(RESOURCE_NAME)({

  createPost: {
    method: 'POST',
    url: `${config.base}${config.api.post}`,
    normalizer: (payload, resources, urlParams) => {
      console.log('createPost: ', payload, resources, urlParams);
      if (!payload ) {
        return null
      }
      if (payload.errors || payload.message) {
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
  deletePost: {
    method: 'DELETE',
    url: `${config.base}${config.api.post}/::id`,
    normalizer: DeleteNormalizer(Normalizer),
    networkHelpers: {
      handleStatusCode,
      requestDELETE: requestDELETE,
    },
  },
  getPost: {
    method: 'GET',
    url: `${config.base}${config.api.post}/::id`,
    normalizer: (payload) => Normalizer.payloadToResource([payload]),
    networkHelpers: {
      handleStatusCode,
      requestGET: requestGET,
    },
  },
  getPosts: {
    method: 'GET',
    url: `${config.base}${config.api.posts}`,
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
  updatePost: {
    method: 'PUT',
    url: `${config.base}${config.api.post}/::id`,
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
    createPost: {
      perform: CreatePostAction,
    },
    deletePost: {
      perform: DeletePostAction,
    },
    getPost: {
      perform: GetPostAction,
    },
    getPosts: {
      perform: GetPostsAction,
    },
    updatePost: {
      perform: UpdatePostAction,
    },
  },
  selectors: {
    resource: {
      getResource: GetPosts,
      getResourceById: GetPostById,
    },
    createPost: {
      request: {
        getResource: CreatePostGetResource,
        isPerforming: isRetrievingCreatePost,
      }
    },
    deletePost: {
      request: {
        getResource: DeletePostGetResource,
      }
    },
    getPost: {
      request: {
        getResource: GetPostGetResource,
        isPerforming: isRetrievingGetPost,
      }
    },
    getPosts: {
      request: {
        getResource: GetPostsGetResource,
        isPerforming: isRetrievingGetPosts,

      }
    },
    updatePost: {
      request: {
        getResource: UpdatePostGetResource,
        isPerforming: isRetrievingUpdatePost,
      }
    },
  }
} = BlogPostResource;

export {
  CreatePostAction,
  DeletePostAction,
  GetPostAction,
  GetPostsAction,
  UpdatePostAction,

  CreatePostGetResource,
  DeletePostGetResource,
  GetPostGetResource,
  GetPostsGetResource,
  UpdatePostGetResource,
  isRetrievingGetPost,
  isRetrievingGetPosts,
  GetPosts,
  GetPostById,

  isRetrievingUpdatePost,
  isRetrievingCreatePost,
}
