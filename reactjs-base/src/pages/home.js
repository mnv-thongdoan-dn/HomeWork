import React, {Component} from 'react';
import CountDown from '../components/countDown';

class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
      counts: [
        {count: 50000},
        {count: 40000},
        {count: 30000}
      ]
    }
  }

  render() {
    return(
      <>
        <h1>This is Home page</h1>
        <div className='wrapper'>
          {
            this.state.counts.map((item, index) => {
              return (
                <CountDown key={index} data={item}/>
              )
            })
          }
       </div>
      </>
    )
  }
}

export default Home;
