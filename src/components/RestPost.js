export function Post(url, body) {
    return fetch(url, {
      method: 'POST',
      body: body
    })
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
  }
export default {Post};