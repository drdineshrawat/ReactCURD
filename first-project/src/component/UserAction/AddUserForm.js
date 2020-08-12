import React from 'react';
import useForm from "./AddUser";
import validate from './ValidationRules';

const AddUserForm = () => {
  const {
    onIputChange,
      onSubmit,
      user,
      errors,
  } = useForm(login, validate);

  const{name,username, email,phone, website}=user;

  function login() {
    console.log('No errors, submit callback called!');

  }
console.log(validate);
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
                <form onSubmit={event=>onSubmit(event)} >
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
                    // autoComplete="off" 
                    className={`input ${errors.email && 'is-danger'}`} 
                    type="email" 
                    class="inputbox" 
                    name="email" 
                    value={email || ''}
                    onChange={event=>onIputChange(event)}
                    placeholder="Email"/>
                     {errors.email && (<div> <p className="help is-danger">{errors.email}</p></div>
            
                  )}
                </div>
                <div class="form-inputtext-space">
                  <input 
                    type="number" 
                    pattern="[0-9]*" 
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

export default AddUserForm;