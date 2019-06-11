

export const DeleteNormalizer = (Normalizer)=> (payload, resources, urlParams,) => {
  if (payload.errors) {
    return Normalizer.normalizeError(payload);
  }
  if (payload) {
    return Normalizer.removePayloadFromResources(resources, urlParams.id);
  }
  return resources;
};


export const CreateNormalizer = (Normalizer) => (payload, resources, urlParams) => {
  if (!payload ) {
    return null
  }
  if (payload.errors || payload.message) {
    return Normalizer.normalizeError(payload);
  }

  if (resources.hasOwnProperty(Normalizer.resourceName)) {
    return Normalizer.mergeResourceAndPayload(resources, [payload])
  } else {
    return Normalizer.payloadToResource([payload]);
  }
};

export const UpdateNormalizer = (Normalizer) => (payload, resources) => {
  if (payload.errors || payload.message) {
    return Normalizer.normalizeError(payload);
  }
  if (payload) {
    return Normalizer.updateResource(resources, payload);
  }
  return resources;
};

export const GetListNormalizer = (Normalizer) => (payload) => {
  if (!payload && payload.error) {
    return null;
  }
  if (Array.isArray(payload)) {
    return Normalizer.payloadToResource(payload);
  } else {
    return Normalizer.payloadToResource(payload.data, payload);
  }
};

export const GetByIdNormalizer = (Normalizer) => (payload) => Normalizer.payloadToResource([payload])
