import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <form className='form-user'>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input id="email" name="email" type="text" placeholder='Email'/>
          <span>Please enter Email !</span>
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password:</label>
          <input id="password" name="password" type="text" placeholder='Password'/>
          <span>Please enter password !</span>
        </div>
        <div className='form-control'>
          <label htmlFor='country'>Country:</label>
          <select id="country" name="country">
            <option>Viet Nam</option>
            <option>Japan</option>
            <option>Korea</option>
          </select>
        </div>          
        <div className='form-control'>
          <label>gender:</label>
          <input value="male" id="male" name="gender" type="radio"/>
          <label htmlFor='male'>Male</label>
          <input value="female" id="female" name="gender" type="radio"/>
          <label htmlFor='female'>Female</label>
        </div>
        <div className='form-control'>
          <label htmlFor="info">Other information:</label>
          <textarea id="info" name="info" type="area" rows="5"/>
        </div>
        <div className='form-control'>
          <label htmlFor="terms">I agree to the terms</label>
          <input id="terms" name="terms" type="checkbox"/>
        </div>
        <div className='form-control'>
          <button>Cancel</button>
          <button>Create User</button>
        </div>
      </form>
    );
  }
}

export default Form;
