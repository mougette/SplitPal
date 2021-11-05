 const Patch = (url, body) => {
    fetch(url, {
      method: 'PATCH',
      body: body
    }).then((response) => response.json())
          .then((json) => {
            console.log(json)
            alert(json);
          });
  }
export default Patch;