import React, {Component} from 'react';
import CountDown from '../components/countDown';

class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
      counts: [
        {count: 50000, size: 300},
        {count: 4000, size: 230},
        {count: 300, size: 180}
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
