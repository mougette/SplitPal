export function Get(url, quearyString){
                 return fetch(url+quearyString,
                 {
                 	method: "GET"
                 })
                 .then((response) => response.json())
                 .then((responseData) => {
                 if(responseData == "UserName or Password is incorrect"){
                    alert(responseData)
                 }
                   return responseData;
                 })
               }
export default {Get};