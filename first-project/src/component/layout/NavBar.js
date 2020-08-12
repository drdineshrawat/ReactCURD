import React from 'react';
import {Link,NavLink} from 'react-router-dom';

import '../.././style/NavBar.css'


class NavBar extends React.Component{
    render(){
        return(
            <div className="navigationBar">
        <nav className="navbar navbar-expand-md ">
          <div className="companyBand">
            <Link className="navbar-brand logo" to="/"><span>NoWay</span></Link>
          </div>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon one"></span>
            <span className="navbar-toggler-icon two"></span>
            <span className="navbar-toggler-icon three"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="menu-list">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
                </li>    
              </ul>
            </div>
          </div> 

          <div className="nav-button">
            <Link className="button" exact to="/users/addUser">Add New User</Link>
          </div>
        </nav>
      </div>
        )
    }
}

export default NavBar;