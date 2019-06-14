import history from "../../../history";


export const handleStatusCode = (response) => {
  const {status} = response;
  if (status === 401) {
<<<<<<< HEAD
    history.push('/login');
=======
    history.push('#/login');
    window.location.reload();
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
    return response
  }

  if (status === 404) {
<<<<<<< HEAD
    history.push('/404');
=======
    history.push('#/404');
    window.location.reload();
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
    return response
  }


  return response
};

export default handleStatusCode;
