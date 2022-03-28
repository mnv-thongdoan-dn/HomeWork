import API from './api.js'

var xhr = new XMLHttpRequest();

let getUsers = () => {
  xhr.open("GET", API, true);
  xhr.onload = function(){
      console.log(xhr.response);
  };
  xhr.send();
}

getUsers();
