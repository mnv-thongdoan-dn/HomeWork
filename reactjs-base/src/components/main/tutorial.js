import React, {Component} from 'react';

class Tutorial extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {data} = this.props;
    return(
      <section className="tutorial">
      <div className="container">
        <h2 className="title-h2">How to Buy and Sell Cryptocurrency</h2>
        <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <ul className="tutorial-list row">
          {
            data.map((item, index) => {
              return (
                <li key={index} className="tutorial-item col-4">
                <article>
                  <img src={item.img} alt=""/>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </article>
              </li>
              )
            })
          }
        </ul>
      </div>
    </section>
    )
  }
}

export default Tutorial;
