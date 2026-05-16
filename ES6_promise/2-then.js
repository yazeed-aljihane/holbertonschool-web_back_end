export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.message);
      return error;
    });
}
