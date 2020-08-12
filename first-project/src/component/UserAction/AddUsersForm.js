import React, { Component ,useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddUser=() =>{

  let history=useHistory();

    const[user,setUser]= useState({});
    const[errors,setErrors]= useState({});

    const{name,username, email,phone, website}=user;

    const onIputChange=(event)=>{
        const{name,value}=event.target;
        setUser({
          ...user,[name]:value
        })
    }

    const validate=()=>{
        let input = user;
        let errors = {};
        let isValid = true;
    
        if (!input["name"]) {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }
    
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }
    
        if (!input["phone"]) {
          isValid = false;
          errors["phone"] = "Please enter your phone number.";
        }
    
        if (typeof input["phone"] !== "undefined") {
            
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(input["phone"])) {
            isValid = false;
            errors["phone"] = "Please enter only number.";
          }else if(input["phone"].length != 10){
            isValid = false;
            errors["phone"] = "Please enter valid phone number.";
          }
        }
    
        setErrors({
          errors: errors
        });
    
        return isValid;
    }
   

    const onSubmit= async(event)=>{
        // remove data from url 
        event.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        // redirect to Contact page for that we use history.push function
       

        if({validate}){
            console.log(user);
      
            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["phone"] = "";
            input["comment"] = "";
            setUser({input:user});
      
            alert('Demo Form is submited');
        }

        history.push("/Contact");
    }

    
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h1>Add User page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div class="login-form">
                        <div className="header">
                          <h2>Add A User</h2>
                        </div>
                  <div className="form-div">
                    <form onSubmit={event=>onSubmit(event)}>
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="name" 
                        value={name}
                        onChange={event=>onIputChange(event)}
                        placeholder="Name"/>
                        <div className="text-danger">{errors.name}</div>
                    </div>
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="username" 
                        value={username}
                        onChange={event=>onIputChange(event)}
                        placeholder="User Name"/>
                        <div className="text-danger">{errors.username}</div>
                    </div>
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="email" 
                        value={email}
                        onChange={event=>onIputChange(event)}
                        placeholder="Email"/>
                        <div className="text-danger">{errors.email}</div>
                    </div>
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="phone" 
                        value={phone}
                        onChange={event=>onIputChange(event)}
                        placeholder="Phone Number"/>
                        <div className="text-danger">{errors.phone}</div>
                    </div>
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="website" 
                        value={website}
                        onChange={event=>onIputChange(event)}
                        placeholder="Web Site"/>
                        <div className="text-danger">{errors.website}</div>
                    </div>
                    <div class="form-button-space form-button">
                      <button type="submit"  class="btn btn-primary">Add User</button>
                    </div>
                  </form>
                        </div>
                  </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Name--{name}</h2>
                <h2>User Name--{username}</h2>
                <h2>Email--{email}</h2>
                <h2>Phone Number--{phone}</h2>
                <h2>Web Site Name--{website}</h2>
            </div>
        </div>
       
        )
    }


export default AddUser
