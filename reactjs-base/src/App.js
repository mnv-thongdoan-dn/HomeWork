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

  upDataTable = (data) => {
    this.setState({dataTable: data})
    localStorage.setItem("datas", JSON.stringify(data))
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
          <Table upData={this.upDataTable} data={this.state.dataTable}/> :
          <Form onChangePage={this.changeBtn} getDataUser={this.getDataUser}/>
        }
        </div>
      </div>
    );
  }
}

export default App;
