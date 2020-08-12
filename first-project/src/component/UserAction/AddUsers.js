import React, { Component } from 'react';

import '../.././style/Home.css';

// without hook form Add User

 class AddUsers extends Component {

constructor(props) {
    super(props)

    this.state = {
         name:"",
         userName:"",
         email:"",
         contact:"",
         websiteaddr:""
    }
    this.handleEvent=  this.handleEvent.bind(this);
}

handleEvent=(event)=>{
   const{name,value,type}= event.target;
   this.setState({
    [name]:value
   })
  
}



    render() {
        const{name,userName, email,contact, websiteaddr}=this.state;
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
                    <form action="#">
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="name" 
                        value={name}
                        onChange={this.handleEvent}
                        placeholder="Name"/>
                    </div>
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="userName" 
                        value={userName}
                        onChange={this.handleEvent}
                        placeholder="User Name"/>
                    </div>
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="email" 
                        value={email}
                        onChange={this.handleEvent}
                        placeholder="Email"/>
                    </div>
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="contact" 
                        value={contact}
                        onChange={this.handleEvent}
                        placeholder="Phone Number"/>
                    </div>
                    <div class="form-inputtext-space">
                      <input 
                        type="text" 
                        class="inputbox" 
                        name="websiteaddr" 
                        value={websiteaddr}
                        onChange={this.handleEvent}
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
                <h2>User Name--{userName}</h2>
                <h2>Email--{email}</h2>
                <h2>Phone Number--{contact}</h2>
                <h2>Web Site Name--{websiteaddr}</h2>
            </div>
        </div>
       
        )
    }
}

export default AddUsers;
