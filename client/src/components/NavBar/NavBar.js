import React from "react";
import "./NavBar.css";

const NavBar = props => (

    <div className="container" id="nav-container">
          <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
            <a href=""><img id="logo" alt="Grasshopper" src={require("./logo-2.png")} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto" id="ul">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/course-overview">Catalog</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown09" id="dropdown">
                    <a className="dropdown-item" href="/my-courses">My Courses</a>
                    <a className="dropdown-item" href="">Settings</a>
                    <a className="dropdown-item" href="">Log Out</a>
                    {localStorage.getItem('jwtToken') &&
                    <a className="dropdown-item" onClick={this.logout}>Logout</a>
                  }
                  </div>
                </li>
              </ul>
              <a href="/course-overview" ><button className="btn btn-nav">Find Course</button></a>
              <a href="/course-creator"><button className="btn btn-nav">Create Course</button></a>
            </div>
          </nav>
        </div>
      );


export default NavBar;