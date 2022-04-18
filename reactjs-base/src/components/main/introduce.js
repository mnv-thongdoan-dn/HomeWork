import React, {Component} from 'react';

class Introduce extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {data} = this.props;
    return (
      <section className="introduce">
      <div className="container">
          <h2 className="title-h2">The Global Leader of Social Trading</h2>
          <p className="sub-title-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <ul className="introduce-content row">
          {
            data.map((item, index) => {
              return (
                <li  className="introduce-content-item col-4">
                <article key={index} className="content-wraper">
                  <img src={item.img}  alt="introduce1"/>
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
  };
};

export default Introduce;
