import history from "../../../history";


export const handleStatusCode = (response) => {
  const {status} = response;
  if (status === 401) {
    history.push('#/login');
    window.location.reload();
    return response
  }

  if (status === 404) {
    history.push('#/404');
    window.location.reload();
    return response
  }


  return response
};

export default handleStatusCode;
