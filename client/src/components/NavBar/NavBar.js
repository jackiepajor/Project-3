import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <div className="container" id="navContainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" id="nav">
            <a className="navbar-brand" href="#">Grasshopper</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample09">
                <ul className="navbar-nav mr-auto" id="ul">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Catalog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown09" id="dropdown">
                        <a className="dropdown-item" href="#">Courses</a>
                        <a className="dropdown-item" href="#">Settings</a>
                        <a className="dropdown-item" href="#">Drafts</a>
                    </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-md-0">
                    <input class="form-control" type="text" placeholder="Search Courses" aria-label="Search" />
                </form>
            </div>
        </nav>
    </div>
);

export default NavBar;