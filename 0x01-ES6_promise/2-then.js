export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
      console.log('Got a reponse from the API');
    } else {
      reject(new Error());
    }
  });
}
