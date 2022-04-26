import {useState} from 'react';

export default function fields(initialValue) {

	const [formValue, setFormValue] = useState(initialValue);

	const resetForm = () => {
		setFormValue(initialValue)
	}

	const handleChange = (event) => {
    const {name, type, value, checked} = event.target;
    const data = type === 'checkbox' ? checked : value;

    setFormValue({...formValue, [name]: data})
  }

	return {formValue ,handleChange, resetForm};
}
