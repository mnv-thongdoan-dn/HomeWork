import React, {Component} from 'react';

class Features extends Component {
  constructor(props){
    super(props)
  }
 
  render(){
    const {data} = this.props;
    console.log(data);
    return (
      <section className="features">
        <div className="container">
          <h2 className="title-h2">Our Features</h2>
          <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <ul className="features-list row">
            {
              data.map((item, index) => {
                return (
                  <li key={index} className="features-item col-4">
                  <a href="abc.com">
                    <img src={item.img} alt=""/>
                  </a>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
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

export default Features;
