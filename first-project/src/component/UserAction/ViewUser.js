import React, { useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory,useParams,Link} from 'react-router-dom';

import '../.././style/View.css';

const ViewUser=()=>{

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
        <div className="container py-4">
            <div className="row">
                {/* <div className="col">
                    <h1>View User page</h1>
                </div> */}
            </div>
            <div className="view-page">
            <div className="row">
            <div className="header">
                  <h2>View A User</h2>
             </div>
            </div>
            <div className="content">
            <h2><span>UserId--</span>{id}</h2>
            <h2><span>Name--</span>{name}</h2>
            <h2><span>User Name--</span>{username}</h2>
            <h2><span>Email--</span>{email}</h2>
            <h2><span>Phone Number--</span>{phone}</h2>
            <h2><span>Web Site Name--</span>{website}</h2>
            </div>
           <div className="button">
           <Link to="/Contact">Back</Link>
           </div>

            </div>
           
        
        </div>
    </div>
    
    )
}


export default ViewUser;