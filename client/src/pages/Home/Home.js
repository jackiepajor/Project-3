import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
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


        </div>

      </div>
    );
  }
}

export default Home;