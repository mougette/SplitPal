 const Post = (url, body) => {
    fetch(url, {
      method: 'POST',
      body: body
    }).then((response) => response.json())
          .then((json) => {
            //TODO: set alerts based on response
            console.log(json)
            alert(json);
          });
  }
export default Post;