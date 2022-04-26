import React from 'react';
import fields from '../../hooks/Fields';
import validate from '../../hooks/Validate';

function FormUser({getDataUser}) {
    const initialValue = {
      email: '',
      firstName: '',
      lastName: '',
      avatar: '',
      agree: false
    } 

  const {formValue, handleChange, resetForm} = fields(initialValue);
  const {formErrors, validateUserForm} = validate();

  const handleSubmit = (event) => {
    const newValue = {...formValue};
    let isValid = validateUserForm(newValue);
    if (isValid) {
      getDataUser(newValue)
      alert(
        `
        Email: ${newValue.email} \n
        FirstName: ${newValue.firstName} \n
        LastName: ${newValue.lastName} \n
        agree: ${newValue.agree} \n
        `
      )
      resetForm(initialValue)
    } 
    event.preventDefault();
  }

    return (
      <form className='form-user' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input onChange={handleChange} id="email" name="email" type="text" placeholder='Email'/>
          <span>{formErrors.email}</span>
        </div>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name:</label>
          <input onChange={handleChange} id="firstName" name="firstName" type="text" placeholder='First Name'/>
          <span>{formErrors.firstName}</span>
        </div>         
        <div className='form-control'>
          <label htmlFor='lastName'>Last Name:</label>
          <input onChange={handleChange} id="lastName" name="lastName" type="text" placeholder='Last Name'/>
          <span>{formErrors.lastName}</span>
        </div>         
        <div className='form-control'>
          <label htmlFor="avatar">Avatar</label>
          <input onChange={handleChange} id="avatar" name="avatar" type="text"/>
          <span>{formErrors.avatar}</span>
        </div>
        <div className='form-control'>
          <input onChange={handleChange} id="agree" name="agree" type="checkbox"/>
          <label htmlFor="agree">I agree to the terms</label>
        </div>
        <div className='form-control'>
          <button>Cancel</button>
          <button type='submit'>Create User</button>
        </div>
      </form>
    );
}

export default FormUser;
