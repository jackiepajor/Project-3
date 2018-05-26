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

          <div className="container" id="idk">
            <div className="row" >


              {/* Left Side */}
              <div className="col-lg-6">
                <div className="row">
                  <h3 className="display-4 white-txt text-center" ><strong className="header">Meet The Team</strong></h3>
                </div>

                {/* profile */}
                <div className="row text-right team">
                  <div className="col-sm-6">
                    <h3 className="white-txt">Ethan Rogers</h3>
                    <h5>Beer Pong Champion</h5>
                  </div>
                  <div className="col-sm-6 text-center media-links">
                    <a className="footer-link" href=""><i className="fa fa-github"></i></a>
                    <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
                    <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
                {/* ///profile */}

                {/* profile */}
                <div className="row text-right team">
                  <div className="col-sm-6">
                    <h3 className="white-txt">Jaclyn Pajor</h3>
                    <h5>Rich af</h5>
                  </div>
                  <div className="col-sm-6 text-center media-links">
                    <a className="footer-link" href=""><i className="fa fa-github"></i></a>
                    <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
                    <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
                {/* ///profile */}

                {/* profile */}
                <div className="row text-right team">
                  <div className="col-sm-6">
                    <h3 className="white-txt">Kurtis Carpenter</h3>
                    <h5>AKA Madison</h5>
                  </div>
                  <div className="col-sm-6 text-center media-links">
                    <a className="footer-link" href=""><i className="fa fa-github"></i></a>
                    <a className="footer-link" href=""><i className="fa fa-twitter"></i></a>
                    <a className="footer-link" href=""><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
                {/* ///profile */}

              </div>
              {/* ///Left Side */}

              {/* Right Side */}
              <div className="col-lg-6">
                <div className="row">
                  <h3 className="display-4 white-txt" ><strong className="header">Updates</strong></h3>
                </div>
              </div>
              {/* ///Right Side */}
              
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

