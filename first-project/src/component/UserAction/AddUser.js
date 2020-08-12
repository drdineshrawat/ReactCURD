import React, { useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddUser=(callback,validate) =>{

  let history=useHistory();
  
    const[user,setUser]= useState({
        // name:"",,
        // email:"",
        // phone:"",
        // website:""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    }, [errors]);

    const{name,username, email,phone, website}=user;
  

    const onIputChange=(event)=>{
      event.persist();
        const{name,value}=event.target;
        setUser({
          ...user,[name]:value
        })
    }

    const onSubmit= async(event)=>{
        // remove data from url 
        event.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        // redirect to Contact page for that we use history.push function
        history.push("/Contact");
        setErrors(validate(user));
        setIsSubmitting(true);
        console.log(errors.email,44444);

        if(validate(user)){
          console.log(user);
          let input = {};
          input["name"] = "";
          input["email"] = "";
          input["phone"] = "";
          setUser({input:input});
    
          alert(`Demo Form is submited with name: ${user.name} email: ${user.email}`);
      }
    }



    return {
      onIputChange,
      onSubmit,
      user,
      errors,
    }
  };

export default AddUser
