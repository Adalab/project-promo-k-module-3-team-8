const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

function apiCall(data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      return result;
    })
    .catch(function (error) {
      return { success: false, error: 'Grrrr! se ha producido un errorrrr!!' };
    });
}

export default apiCall;
