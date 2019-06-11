export const requestPOST = (body) => {
  return {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    ...(body? {body: JSON.stringify(body)} : {})

  }
};

export const requestGET = () => {
  return {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    }
  }
};

export const requestDELETE = () => {
  return {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    }
  }
};

export const requestPUT = (body) => {
  return {
    method: 'PUT',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  }
};
