import React,{useState,useEffect} from 'react';
import{Link} from 'react-router-dom';
// import{Button}from 'react-bootstrap';

import '../.././style/Contact.css';
import '../.././style/Table.css';
import axios from 'axios';

const Contact =() =>{

const [users,setUser]=useState([]);

useEffect(()=>{
   loadUser();
  },[]
);

const loadUser=async ()=>{
  const result=await axios.get("http://localhost:3003/users");
// reverse function is use to show the new record at the top
  setUser(result.data.reverse());
  // setUser(result.data);
  console.log(result);
};

const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:3003/users/${id}`);
      loadUser();
};

console.log(users,1234);
    return(
        <div className="mt-2">
            <div className="container">
            <table role="table" className="table border">
  <thead role="rowgroup" className="thead-dark">
    <tr role="row">
    <th role="columnheader"> #</th>
      <th role="columnheader"> Name</th>
      <th role="columnheader">User Name</th>
      <th role="columnheader">Email</th>
      <th role="columnheader">Action</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    {users.map((user,index)=>(
        <tr role="row">
          <th scope="row" role="cell"> {index+1}</th>
            <td role="cell">{user.name}</td>
            <td role="cell">{user.username}</td>
            <td role="cell">{user.email}</td>
            <td>
              <Link className="bt bt-primary mr-2" to={`users/viewUser/${user.id}`}>View</Link>
              <Link className="bt bt-outline-primary  mr-2" to={`users/editUser/${user.id}`}>Edit</Link>
              <Link className="bt bt-danger  mr-2" onClick={()=>deleteUser(user.id)}>Delete</Link>
            </td>
        </tr>
      
        ))}
    </tbody>
</table>
            </div>
        </div>
       
    )
};
export default Contact;