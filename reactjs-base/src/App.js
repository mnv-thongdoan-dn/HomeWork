import React, {Component} from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      togglePage: 'home',
    }

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle(param){
    this.setState({togglePage: param});
  }

  render(){
    return (
      <div className='app'>
        <ul className='menu'>
          <li><a onClick={ () => this.menuToggle('home') } href='#'>Home</a></li>
          <li><a onClick={ () =>this.menuToggle('about') } href='#'>About</a></li>
        </ul>
        { this.state.togglePage === 'home' ? <Home/> : <About/> }
      </div>
    );
  }
}

export default App;
