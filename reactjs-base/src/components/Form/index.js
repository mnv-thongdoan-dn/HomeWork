import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      initialValue: {
        id: '',
        email: '',
        password: '',
        country: 'vietnam',
        gender: 'male',
        info: '',
        agree: false
      },
      formErrors: {}
    }
    
  }

  handleChange = (event) => {
    const {name, type, value, checked} = event.target;
    const data = type === 'checkbox' ? checked : value;
    const randomId = Math.random() * 99;

    this.setState({ 
      initialValue: {...this.state.initialValue, [name]: data, id :randomId}
    });
  }

  validate(){
    const { email, password, agree } = this.state.initialValue;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const errors = {};
    let isValid = true;

    if(!agree) {
      alert("you do not agree to the terms")
    }

    if(email.length == 0) {
      errors.email = "Email is required !"
      isValid = false
    } else if(!regexEmail.test(email)) {
      errors.email = "Please enter correct email !"
      isValid = false
    }

    if(password.length == 0) {
      errors.password = "Password is required !"
      isValid = false
    } else if(password.length < 4) {
      errors.password = "Password must be longer than 4 characters"
      isValid = false
    } else if(password.length > 10) {
      errors.password = "Password must be less than 10 characters"
      isValid = false
    }

    this.setState({formErrors: errors})

    return isValid;
  }

  handleSubmit = (event) => {
    let isValid = this.validate();
    if (isValid) {
      this.setState({formErrors: this.validate(this.state.initialValue)})
      this.props.getDataUser(this.state.initialValue)
      alert("create user success !")
      this.props.redirectPage("table")
    } 
    event.preventDefault();
  }

  render(){
    return (
      <form className='form-user' onSubmit={this.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input onChange={this.handleChange} id="email" name="email" type="text" placeholder='Email'/>
          <span>{this.state.formErrors.email}</span>
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password:</label>
          <input onChange={this.handleChange} id="password" name="password" type="password" placeholder='Password'/>
          <span>{this.state.formErrors.password}</span>
        </div>
        <div className='form-control'>
          <label htmlFor='country'>Country:</label>
          <select onChange={this.handleChange} defaultValue="vietnam" id="country" name="country">
            <option value='vietnam'>Viet Nam</option>
            <option value='japan'>Japan</option>
            <option value='korea'>Korea</option>
          </select>
        </div>          
        <div className='form-control'>
          <label>gender:</label>
          <input onChange={this.handleChange} defaultChecked="male" value="male" id="male" name="gender" type="radio"/>
          <label htmlFor='male'>Male</label>
          <input onChange={this.handleChange} value="female" id="female" name="gender" type="radio"/>
          <label htmlFor='female'>Female</label>
        </div>
        <div className='form-control'>
          <label htmlFor="info">Other information:</label>
          <textarea onChange={this.handleChange} id="info" name="info" type="area" rows="5"/>
        </div>
        <div className='form-control'>
          <input onChange={this.handleChange} id="agree" name="agree" type="checkbox"/>
          <label htmlFor="agree">I agree to the terms</label>
        </div>
        <div className='form-control'>
          <button>Cancel</button>
          <button type='submit'>Create User</button>
        </div>
      </form>
    );
  }
}

export default Form;
