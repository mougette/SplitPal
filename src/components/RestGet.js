export function Get(url, quearyString){
                 return fetch(url+quearyString,
                 {
                 	method: "GET"
                 })
                 .then((response) => response.json())
                 .catch((error) => console.warn("fetch error:", error))
                 .then((responseData) => {
                 if(responseData != "User info correct"){
                    alert(responseData)
                 }
                   return responseData;
                 })
                 .catch(error => console.warn(error));
               }
export default {Get};