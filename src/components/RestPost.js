export function Post(url, body) {
    return fetch(url, {
      method: 'POST',
      body: body
    })
        .then((response) => response.json())
        .catch((error) => console.warn("fetch error:", error))
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.warn(error));
  }
export default {Post};