import history from "../../../history";


export const handleStatusCode = (response) => {
  const {status} = response;
  if (status === 401) {
    history.push('/login');
    return response
  }

  if (status === 404) {
    history.push('/404');
    return response
  }


  return response
};

export default handleStatusCode;
