 const Get = (url, quearyString) => {
    fetch(url+quearyString, {
      method: 'GET'
    }).then((response) => response.json())
          .then((json) => {
            console.log(json)
            alert(json);
          });
  }
export default Get;