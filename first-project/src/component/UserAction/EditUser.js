import React, { useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

const EditUser=()=>{
    let history=useHistory();
    const{id}=useParams();

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const{name,username, email,phone, website}=user;

    const onIputChange=(event)=>{
        const{name,value}=event.target;
        setUser({
          ...user,[name]:value
        })
    }

    const onSubmit= async(event)=>{
        // remove data from url 
        event.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user);
        // redirect to Contact page for that we use history.push function
        history.push("/Contact");
    }

    const onloadUser=async(event)=>{
        const result=await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result.data)
        setUser(result.data)
    }

    useEffect(()=>{
        onloadUser();
    },[])
    
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col">
                <h1>Edit User page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div class="login-form">
                    <div className="header">
                      <h2>Edit A User</h2>
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
                </div>
                <div class="form-inputtext-space">
                  <input 
                    type="text" 
                    class="inputbox" 
                    name="username" 
                    value={username}
                    onChange={event=>onIputChange(event)}
                    placeholder="User Name"/>
                </div>
                <div class="form-inputtext-space">
                  <input 
                    type="text" 
                    class="inputbox" 
                    name="email" 
                    value={email}
                    onChange={event=>onIputChange(event)}
                    placeholder="Email"/>
                </div>
                <div class="form-inputtext-space">
                  <input 
                    type="text" 
                    class="inputbox" 
                    name="phone" 
                    value={phone}
                    onChange={event=>onIputChange(event)}
                    placeholder="Phone Number"/>
                </div>
                <div class="form-inputtext-space">
                  <input 
                    type="text" 
                    class="inputbox" 
                    name="website" 
                    value={website}
                    onChange={event=>onIputChange(event)}
                    placeholder="Web Site"/>
                </div>
                <div class="form-button-space form-button">
                  <button type="submit"  class="btn btn-primary">Update User</button>
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


export default EditUser;