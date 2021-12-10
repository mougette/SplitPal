export function Put(url, body) {
    return fetch(url, {
      method: 'PUT',
      body: body
    })
        .then((response) => response.json())
        .catch((error) => console.warn("fetch error:", error))
        .then((responseData) => {
            console.log(responseData)
            return responseData;
        })
        .catch(error => console.warn(error));
  }
export default {Put};
