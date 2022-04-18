import React, {Component} from 'react';

class Advisors extends Component{
  constructor(props){
    super(props)
  }
  render() {
    const {data} = this.props;
    return (
      <section className="advisors">
      <div className="container">
        <h2 className="title-h2">Our Advisors</h2>
        <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <ul className="advisors-list row">
         {
         data.map((item, index) => {
           return (
              <li key={index} className="advisors-item col-3">
                <article>
                  <div className="wrapper-image">
                    <img src={item.img}alt=""/>
                  </div>
                  <h3>{item.name}</h3>
                  <span>{item.position}</span>
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
};

export default Advisors;
