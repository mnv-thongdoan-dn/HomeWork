import { useState } from 'react'

export default function validate() {

 const [formErrors, setFormErrors] = useState({});

 const validateUserForm = (formValues) => {
    const { email, firstName, lastName, avatar ,agree } = formValues;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const errors = {};
    let isValid = true;

    if(email.length === 0) {
      errors.email = "Email is required !"
      isValid = false
    } else if(!regexEmail.test(email)) {
      errors.email = "Please enter correct email !"
      isValid = false
    }

    if(firstName.length === 0) {
      errors.firstName = "First Name is required !"
      isValid = false
    }

    if(lastName.length === 0) {
      errors.lastName = "Last Name is required !"
      isValid = false
    }

    if(avatar.length === 0) {
      errors.avatar = "Avatar is required !"
      isValid = false
    }

    if(!agree) {
      errors.agree = "you do not agree to the terms !"
      isValid = false
    }

    setFormErrors(errors)

    return isValid;
  }

  return {formErrors, validateUserForm};
}
