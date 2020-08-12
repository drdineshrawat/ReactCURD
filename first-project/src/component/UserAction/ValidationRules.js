export default function validate(values) {
    let errors = {};
    let isValid = true;
    
    console.log(values.email);
       if (!values.email) {
        isValid = false;
      errors["email"] = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      isValid = false;
        errors["email"] = 'Email address is invalid';
    }
    
    
     console.log(errors);
    return errors;
  };