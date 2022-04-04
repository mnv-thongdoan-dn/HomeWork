// get list user
const getListUser = async (url) => {
  try {
    let res = await fetch(url, {
        method: "GET"
    });
    let dataUsers = await res.json();
    return dataUsers;
  } catch (error) {
    console.log(error);
  }
}

// get item user
const getUser = async (url, id) => {
  try {
    let res = await fetch(`${url}/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

// add user
const addUser = async (url, body) => {
  try {
    let res = await fetch(url, {
      method: 'POST', 
      body: JSON.stringify(body), 
      headers:{
        'Content-Type': 'application/json'
      }
    })
    return res;
  } catch (error) {
    console.log(error);
  }
}

//  edit user
const editUser = async (url, id, body) => {
  try {
    let res = await fetch(`${url}/${id}`, {
      method: 'PUT', 
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    return res;
  } catch (error) {
    console.log(error);
  }
}

// delete user
const deleteUser = async (url, id) => {
  try {
    let res = await fetch(`${url}/${id}`, {method: 'DELETE'})
    // let data = await res.json();
    return res ;
  } catch (error) {
    console.log(error);
  }
}

// srearch user

const searchUser = async (url, data) => {
  try {
    let res = await fetch(`${url}?name=${data}`, {method: 'GET'});
    let datas = await res.json();
    return datas;
  } catch (error) {
    console.log(error);
  }
}
