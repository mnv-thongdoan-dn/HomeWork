"use strict";

let $ = (id) => {return document.getElementById(id)};
let $name = $('fullName');
let $age = $('age');
let $email = $('email');
let $btnCancel = $('btn-cancel');
let $btnSave = $('btn-save');

const queryString = location.search.substring(1)
let index = queryString.indexOf("=");
let idUser = parseInt(queryString.slice(index + 1));

let dataUser = getUser(API_USERS, idUser).then((user) => {
  $name.value = user.name;
  $age.value = parseInt(user.age);
  $email.value = user.email;
})

$btnCancel.addEventListener('click', function(){
  if(confirm("You want to leave this page")){
    history.back()
  }
})

$btnSave.disabled = false;
$btnSave.addEventListener("click", async function(e){
  let isValid = true;
  e.preventDefault();

  if($name.value == ""){
    $('fullname-err').innerHTML = "Please enter full name !";
    isValid = false;
  } else {
    $('fullname-err').innerHTML = "";
  }

  if($age.value == "" || $age.value == NaN){
    $('age-err').innerHTML = "Please enter age!";
    isValid = false;
  } else{
    $('age-err').innerHTML = "";
  }

  if($email.value == ""){
    $('email-err').innerHTML = "Please enter email!";
    isValid = false;
  } else{
    $('email-err').innerHTML = "";
  }

  if(isValid){
    let formData = new FormData($("edit-user"));
    let datas = {
      name: formData.get("fullName"),
      age: formData.get("age"),
      email: formData.get("email"),
    }

    $btnSave.disabled = true;
    let res = await editUser(API_USERS, idUser, datas)
    if(res.status === 200){
      window.location.href = "../index.html"
    }else{
      $btnSave.disabled = false;
    }
  }
})
