 const Post = (url, body) => {
    fetch(url, {
      method: 'POST',
      body: body
    }).then((response) => response.json())
          .then((json) => {
            console.log(json)
            alert(json);
          });
  }
export default Post;