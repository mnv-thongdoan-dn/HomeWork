import React, {Component} from 'react';
import "./App.css";
import TableUser from './components/TableUser';
import FormRegisterUser from './components/FormRegisterUser';

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
          <TableUser upData={this.upDataTable} data={this.state.dataTable}/> :
          <FormRegisterUser onChangePage={this.changeBtn} getDataUser={this.getDataUser}/>
        }
        </div>
      </div>
    );
  }
}

export default App;
