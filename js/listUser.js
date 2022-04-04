"use strict";

let $ = (id) => {return document.getElementById(id)};
const $tbody = $('main-tbody');
const $searchForm = $('search-form');
const $btnSearchUser = $('search-button');

getListUser(API_USERS).then((users) => {$tbody.innerHTML = renderUsers(users)});

// remove user
const removeUser = async (id) => {
  if(confirm("Are you sure you want to delete this user?")){
    let res = await  deleteUser(API_USERS, id);
    if(res.status === 200){
      location.reload()
    }
  }
}

// edit user
let updateUser = async (id) => {
    window.curUserId = id;
    window.location.href = `./pages/edit_user.html?curUserId=${curUserId}`
}

// render list user
const renderUsers = (data) => {
  let html = '';
  for(let i = 0; i < data.length; i++){
    html += '<tr><td>' + (i + 1) +'</td>' +
    '<td>' + data[i].name + '</td>' +
    '<td>' + data[i].age + '</td>' +
    '<td>' + data[i].email + '</td>' +
    '<td>' + 
        '<a class="btn btn-edit" onclick="updateUser(' + data[i].id + ')">Edit</a>' +
        '<button type="button" id="btn-delete" class="btn btn-delete" onclick="removeUser(' + data[i].id + ')">DElETE</button>' +
    '</td></tr>' 
  
  }
  return html;
}

// search user
$btnSearchUser.addEventListener("click", async function(e){
  e.preventDefault();
  let formData = new FormData($searchForm);
  let data = {
    name: formData.get("name"),
  }

  let dataSearch = await searchUser(API_USERS, data.name);
  $tbody.innerHTML = renderUsers(dataSearch);
})
