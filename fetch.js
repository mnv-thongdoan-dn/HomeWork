import API from './api.js'

async function getUsers() {
  try {
    let res = await fetch(API);
    let datas = await res.json();
    console.log(datas)
    return datas;
  } catch (error) {
    console.log(error);
  }
}

getUsers()
