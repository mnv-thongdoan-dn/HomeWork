"use strict";

let $ = (id) => {return document.getElementById(id)};
let $name = $('fullName');
let $age = $('age');
let $email = $('email');
let $btnReset = $('btn-reset');
let $btnCreateUser = $('btn-create-user');

$btnCreateUser.disabled = false;
$btnReset.addEventListener('click', function(){
  if(confirm("You want to leave this page")){
    history.back()
  }
})

$btnCreateUser.addEventListener("click", async function(e){
  let isValid = true;
  e.preventDefault();

  // let regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
  // let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  // let valueInput = $('search-input').value;
  // /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i

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
    let formData = new FormData($("create-user"));
    let datas = {
      name: formData.get("fullName"),
      age: formData.get("age"),
      email: formData.get("email"),
    }

    $btnCreateUser.disabled = true;
    let res = await addUser(API_USERS, datas);
    if(res.status === 201){
      window.location.href = "../index.html"
    } else {
      $btnCreateUser.disabled = false;
    }
  }
})
