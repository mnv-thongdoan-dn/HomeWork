import React, {Component} from 'react';
import "./App.css";
import Table from './components/Table';
import Form from './components/Form';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="app">
        <div className='group-button'>
          <button>Add User</button>
          <button>Table User</button>
        </div>
        <div className='content'>
          {/* <Table/>
          <Form/> */}
        </div>
      </div>
    );
  }
}

export default App;
