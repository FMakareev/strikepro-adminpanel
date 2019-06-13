export class NormalizationPayload {

  resourceName = null;

  constructor(resourceName) {
    this.resourceName = resourceName;
  }

  /**
   * @param {object} resources - объект с исходными ресурсами
   * @param {array} payload - массив с новыми ресурсами
   * @desc метод для добавления в существующие ресурсы новых ресурсов
   * */
  mergeResourceAndPayload = (resources, payload) => {
    payload.forEach((item) => {
      resources[this.resourceName][this.resourceName][item.id] = item;
      resources[this.resourceName].metadata = {
        data: [...resources[this.resourceName].metadata.data, item.id],
      };
    });
    return resources;
  };

  /**
   * @param {array} resources
   * @param {string} payloadID
   * @desc
   * */
  removePayloadFromResources = (resources, payloadID) => {
    if (!payloadID) {
      console.warn('payloadID undefined');
      return resources;
    }
    console.log('removePayloadFromResources: ', this, resources, payloadID);
    delete resources[this.resourceName][this.resourceName][payloadID];
    resources[this.resourceName].metadata.data = resources[this.resourceName]
      .metadata.data.filter(item => item !== payloadID);
    return resources;
  };

  /**
   * @param {array} payload
   * @param {object} metadata
   * @desc
   * */
  payloadToResource = (payload, metadata = {}) => {
    const data = {
      entities: {
        [this.resourceName]: {
          [this.resourceName]: {},
          metadata: {}
        },
      },
      result: []
    };
    if (payload) {
      payload.forEach((item) => {
        data.result.push(item.id);
        data.entities[this.resourceName][this.resourceName][item.id] = item;
      });
    }
    data.entities[this.resourceName].metadata = {
      ...metadata,
      data: data.result,
    };
    return data;
  };

  /**
   * @param {object} resources - объект с исходными ресурсами
   * @param {object} payload - массив с новыми ресурсами
   * @desc метод для добавления в существующие ресурсы новых ресурсов
   * */
  updateResource = (resources, payload) => {
    resources[this.resourceName][this.resourceName][payload.id] = payload;
    return resources;
  };

  /**
   * @param {object} payload
   * @param {object} payload.errors
   * @param {array} payload.errors.propName
   * @param {string} payload.message
   * */
  normalizeError = (payload) => {
    if(!payload.errors){
      payload.errors = {};
    }
    return {
      entities: {
        ...payload,
        message: [payload.message]
      },
      result: {errors: payload}
    };
  }

}
