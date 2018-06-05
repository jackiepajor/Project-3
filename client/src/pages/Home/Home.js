import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  state = {

  };

  componentDidMount() {
  }

  render() {
    return (
      <div>

        <div className="jumbotron jumbotron-fluid" id="main-jumbo">
          <h1 className="display-2" id="header-title"><strong>Lifelong Learning</strong></h1>
        </div>
        <div id="home-break"></div>
        <div className="container" id="home-content">

          <div className="row" id="home-first-section">
            <div className="col-xl-12 text-center">
                <h3>Learn to be your own teacher</h3>
                <h6 id="home-h6">Join the other 10,000+ students who are learning through teaching.</h6>
                <Link to="/course-creator/create/course"><button className="btn btn-nav" id="home-new-btn">Create A Course</button></Link>
            </div>
          </div>
       

          <div className="row" id="learn-row">
          
            
            <div className="col-xl-6" id="home-learn-section">
       
            </div>

            <div className="col-xl-6">
              <h3 className="home-title-2 display-4" id="find">Find what you need to learn</h3>
            </div>

          </div>

          <div className="row" id="teach-row">

            <div className="col-xl-6 " >
              <h3 className="home-title-2 display-4 text-right" id="share">Share what you already know</h3>
            </div>
          
            <div className="col-xl-6" id="home-teach-section">
        
            </div>
            

          </div>
          <div className="container" id="third-section">

          <div className="row">
            <div className="col-xl-12 text-center">
              <h3 id="be">BE APART OF SOMETHING BIGGER</h3>
            </div>
          </div>
          
          <div className="row" id="third-row">
            <div className="col-md-4 third-col">
              <strong className="tr-strong">Find courses you need</strong>
              <p className="tr-p">
                We offer a wide collection of online courses to provide users
                with a variety of knowledge waiting for them at their fingertips.
              </p>
            </div>
            <div className="col-md-4 third-col">
              <strong className="tr-strong">Build courses you want</strong>
              <p className="tr-p">
                We have a user-friendly course builder that makes sharing your
                knowledge a breeze.
              </p>
            </div>
            <div className="col-md-4 third-col">
              <strong className="tr-strong">Belong to a community</strong>
              <p className="tr-p">
                We have built a community of like-minded, motivated individuals
                that understand the importance of always learning.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <button className="btn btn-hopper" id="more-dets-btn">More Details</button>
            </div>
          </div>

          </div>

        

        </div>

      </div>
    );
  }
}

export default Home;