import React from 'react'
import {useState, useEffect} from 'react';
import "./App.css";
import UserList from './components/UserList';
import Form from './components/Form';
import HttpRequest from './HttpRequest';

function App() {

  const {getListUser, addUser, deleteUser} = HttpRequest();
  const [toggleBtn, setToggleBtn] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1) ;
  const URL = 'https://reqres.in/api/users';

  useEffect(() => {
    getListUser(`${URL}?page=${currentPage}&per_page=2`)
    .then((users) => {setDataUsers(users)});
  }, [currentPage]);

  const changeBtn = () => {
    setToggleBtn(!toggleBtn)
  }

  const getDataUser = (data) => {
    addUser(URL, data)
    .then(res => {
      if(res.status === 201){
        alert(`status: ${res.status}: add user success !`)
        setToggleBtn(!toggleBtn)
      }
    })
  }

  const getIdUser = (id) => {
    if(window.confirm("Are you sure you want to delete this user ?")) {
      deleteUser(URL, id)
      .then(res => {
        if(res.status === 204){
          alert(`status: ${res.status} delete user success !`)
        }
      });
    }
  }

  return (
    <div className="app">
      <div onClick={() => changeBtn()} className='group-button'>
        {
          toggleBtn ? 
          <button>Add User</button> : 
          <button>Table User</button>
        }
      </div>
      <div className='content'>
      {
        toggleBtn ? 
        <UserList setCurrentPage={setCurrentPage} getIdUser={getIdUser} dataUsers={dataUsers}/> :
        <Form getDataUser={getDataUser}/>
      }
      </div>
    </div>
  );
}

export default App;
