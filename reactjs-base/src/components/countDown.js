import React, {Component} from 'react'

class CountDown extends Component{
  constructor(props){
    super(props)
    this.state = {
      changeBtn: true,
      count: this.props.data.count,
      size: this.props.data.size
    };
    this.changeButton = this.changeButton.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStop() {
    clearInterval(this.myInterval);
  }

  handleStart() {
    this.doIntervalChange();
  }

  changeButton() {
    this.setState({changeBtn: !this.state.changeBtn});
    if(this.state.changeBtn) {
      this.handleStop()
    } else {
      this.handleStart()
    }
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      this.setState({count: this.state.count - 1})
    }, 1000)
  }

  componentDidMount() {
    this.doIntervalChange();
  }

  componentDidUpdate() {
    if(this.state.count === 0){
      clearInterval(this.myInterval);
    }
  }

  componentWillUnmount(){
    clearInterval(this.myInterval);
  }
  
  render(){
    return (
      <div style={{width: `${this.state.size}px`}} className='count-down'>
        <div onClick={this.changeButton}  className='group-btn'>
          {this.state.count > 0 && <button onClick={this.handleStop}>{this.state.changeBtn ? "Stop" : "Start"}</button>}
        </div>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default CountDown;
