import React from 'react';
import axios from 'axios';

import '../.././style/Home.css';

const Home =() =>{
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h1>Home page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="login-form">
                        <div className="header">
                          <h2>Login</h2>
                        </div>
                  <div className="form-div">
                    <form action="#">
                    <div className="form-inputtext-space">
                      <input 
                        type="text" 
                        className="inputbox" 
                        name="uname" 
                        placeholder="User Name"/>
                    </div>
                    <div className="form-inputtext-space">
                      <input 
                        type="password" 
                        className="inputbox" 
                        name="psswd" 
                        placeholder="Password"/>
                    </div>
                    <div className="form-button-space form-button">
                      <button type="submit"  className="btn btn-primary">Add</button>
                    </div>
                  </form>
                        </div>
                  </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
       
};

export default Home;