import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "../../components/Grid";
import "./OurTeam.css";

class OurTeam extends Component {
  state = {

  };

  // the "html" (jsx) for the page goes within the render method's return statement, inside the parenthesis
  render() {
    return (
      <div id="content">
        <div className="container" id="main-content">

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="header white-txt text-center display-2">Meet The Team</h2>
            </div>
          </div>

          {/* Ethan */}
          <div className="row profile">
            <div className="col-lg-6 white-txt text-center">
              <h3 className="">John Doe</h3>
              <h5>Developer</h5>
            </div>
            <div className="col-lg-6 text-center"><br />
              <a className="footer-link" href=""><i className="fa fa-github "></i></a>
              <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
              <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
            </div>
          </div>

          {/* Garvey */}
          <div className="row profile">
            <div className="col-lg-6 white-txt text-center">
              <h3 className="">John Doe</h3>
              <h5>Developer</h5>
            </div>
            <div className="col-lg-6 text-center"><br />
              <a className="footer-link" href=""><i className="fa fa-github"></i></a>
              <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
              <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
            </div>
          </div>

          {/* George */}
          <div className="row profile">
            <div className="col-lg-6 white-txt text-center">
              <h3 className="">John Doe</h3>
              <h5>Developer</h5>
            </div>
            <div className="col-lg-6 text-center"><br />
              <a className="footer-link" href=""><i className="fa fa-github"></i></a>
              <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
              <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
            </div>
          </div>

          {/* Elena */}
          <div className="row profile">
            <div className="col-lg-6 white-txt text-center">
              <h3 className="">John Doe</h3>
              <h5>Developer</h5>
            </div>
            <div className="col-lg-6 text-center"><br />
              <a className="footer-link" href=""><i className="fa fa-github"></i></a>
              <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
              <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
            </div>
          </div>


          {/* Jesse */}
          <div className="row profile">
            <div className="col-lg-6 white-txt text-center">
              <h3 className="">John Doe</h3>
              <h5>Developer</h5>
            </div>
            <div className="col-lg-6 text-center"><br />
              <a className="footer-link" href=""><i className="fa fa-github"></i></a>
              <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
              <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
            </div>
          </div>


          {/* Jacyln */}
          <div className="row profile">
            <div className="col-lg-6 white-txt text-center">
              <h3 className="">John Doe</h3>
              <h5>Developer</h5>
            </div>
            <div className="col-lg-6 text-center"><br />
              <a className="footer-link" href=""><i className="fa fa-github"></i></a>
              <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
              <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
            </div>
          </div>


          {/* Kurist */}
          <div className="row profile">
            <div className="col-lg-6 white-txt text-center">
              <h3 className="">John Doe</h3>
              <h5>Developer</h5>
            </div>
            <div className="col-lg-6 text-center"><br />
              <a className="footer-link" href=""><i className="fa fa-github"></i></a>
              <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
              <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
            </div>
          </div>

          


        </div>

        </div>
      </div>
    );
  }
}

{/* <h2 className="display-1 white-txt text-center" ><strong id="header">Meet The Team</strong></h2>
          <br /> <br />

          <div className="row names">
            <div className="col-lg-6 text-right name-title" >
              <h3 className="white-txt">Ethan Rogers</h3>
              <h5>Web Desinger</h5>
            </div>
            <div className="col-lg-6 text-center media-links">
              <a className="footer-link" href=""><i className="fa fa-github"></i></a>
              <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
              <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
           */}
export default OurTeam;

