import React, {Component} from 'react';
import "./App.css";
import Table from './components/Table';
import Form from './components/Form';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggleBtn: true,
      dataTable: JSON.parse(localStorage.getItem('datas')) || [],
    }
  }

  changeBtn() {
    this.setState({ toggleBtn: !this.state.toggleBtn })
  }

  getDataUser = (data) => {
    const newData = [...this.state.dataTable]
    newData.push(data)
    localStorage.setItem("datas", JSON.stringify(newData))
    this.setState({dataTable: newData})
  }

  deleteUser = (id) => {
    if(window.confirm("Are you sure you want to delete this user ?")) {
      const newData = this.state.dataTable.filter((item) => {
        return item.id !== id;
      })
      this.setState({dataTable: newData})
      localStorage.setItem('datas', JSON.stringify(newData))
    }
  }

  render(){
    return (
      <div className="app">
        <div onClick={ () => this.changeBtn() } className='group-button'>
          {
            this.state.toggleBtn ? 
            <button>Add User</button> : 
            <button>Table User</button>
          }
        </div>
        <div className='content'>
        {
          this.state.toggleBtn ? 
          <Table deleteUser={this.deleteUser} data={this.state.dataTable}/> :
          <Form onChangePage={this.changeBtn} togglePage={this.toggleBtn} getDataUser={this.getDataUser}/>
        }
        </div>
      </div>
    );
  }
}

export default App;
