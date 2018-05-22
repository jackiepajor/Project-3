import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "../../components/Grid";
import "./ViewCourses.css";

class ViewCourses extends Component {
  state = {

  };

  // the "html" (jsx) for the page goes within the render method's return statement, inside the parenthesis
  render() {
    return (
      <div>
        
        <div id="view-course-content">
            <br /><br /><br /><br /><br /><br /><br />

            <div className="container" id="course-preview-modal">
                <div className="row">
                    <div className="col-lg-12">

                        {/* Unit Section */}
                        <div className="container" id="inner-preview">
                            <div className="row" >
                                <div className="col-lg-3">
                                    <h5><strong>Unit <span class="unit-number">1</span></strong></h5>
                                </div>
                                <div className="col-lg-5 text-center">
                                    <h5 contentEditable="true">Add Unit Title...</h5>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <button className="btn btn-less">Save</button>
                                    <button className="btn btn-less">Add Lesson</button>
                                </div>
                                {/* <div className="col-lg-1 text-right">
                                    <span className="x"><i class="fa fa-check status-icon" aria-hidden="true"></i></span>
                                </div> */}
                            </div><hr />  
                            
                                {/* Lesson section */}
                                <div className="container lessons">
                                    <div className="row">
                                        <div className="col-lg-6 text-left">
                                            <h5>Lesson <span className="lesson-number">1</span></h5>
                                        </div>
                                        <div className="col-lg-6 text-right">
                                            <h5>Lesson Title</h5>
                                        </div>
                                    </div><hr className="lesson-hr" />
                                </div>
                                {/* Lesson section */}

                                {/* Lesson section */}
                                <div className="container lessons">
                                    <div className="row">
                                        <div className="col-lg-6 text-left">
                                            <h5>Lesson <span className="lesson-number">2</span></h5>
                                        </div>
                                        <div className="col-lg-6 text-right">
                                            <h5>Lesson Title</h5>
                                        </div>
                                    </div><hr className="lesson-hr" />
                                </div>
                                {/* Lesson section */}

                                 {/* Lesson section */}
                                 <div className="container lessons">
                                    <div className="row">
                                        <div className="col-lg-6 text-left">
                                            <h5>Lesson <span className="lesson-number">3</span></h5>
                                        </div>
                                        <div className="col-lg-6 text-right">
                                            <h5>Lesson Title</h5>
                                        </div>
                                    </div><hr className="lesson-hr"/>
                                </div>
                                {/* Lesson section */}

                        </div>
                        {/* Unit Section */}

                        {/* Unit Section */}
                        <div className="container" id="inner-preview">
                            <div className="row" >
                                <div className="col-lg-3">
                                    <h5><strong>Unit <span class="unit-number">2</span></strong></h5>
                                </div>
                                <div className="col-lg-5 text-center">
                                    <h5 contentEditable="true">Add Unit Title...</h5>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <button className="btn btn-less">Save</button>
                                    <button className="btn btn-less">Add Lesson</button>
                                </div>
                                {/* <div className="col-lg-1 text-right">
                                    <span className="x"><i class="fa fa-check status-icon" aria-hidden="true"></i></span>
                                </div> */}
                            </div><hr />  

                        </div>
                        {/* Unit Section */}

                        {/* Unit Section */}
                        <div className="container" id="inner-preview">
                            <div className="row" >
                                <div className="col-lg-3">
                                    <h5><strong>Unit <span class="unit-number">3</span></strong></h5>
                                </div>
                                <div className="col-lg-5 text-center">
                                    <h5 contentEditable="true">Add Unit Title...</h5>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <button className="btn btn-less">Save</button>
                                    <button className="btn btn-less">Add Lesson</button>
                                </div>
                                {/* <div className="col-lg-1 text-right">
                                    <span className="x"><i class="fa fa-check status-icon" aria-hidden="true"></i></span>
                                </div> */}
                            </div><hr />  

                        </div>
                        {/* Unit Section */}

                        {/* Unit Section */}
                        <div className="container" id="inner-preview">
                            <div className="row" >
                                <div className="col-lg-3">
                                    <h5><strong>Unit <span class="unit-number">4</span></strong></h5>
                                </div>
                                <div className="col-lg-5 text-center">
                                    <h5 contentEditable="true">Add Unit Title...</h5>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <button className="btn btn-less">Save</button>
                                    <button className="btn btn-less">Add Lesson</button>
                                </div>
                                {/* <div className="col-lg-1 text-right">
                                    <span className="x"><i class="fa fa-check status-icon" aria-hidden="true"></i></span>
                                </div> */}
                            </div><hr />  

                        </div>
                        {/* Unit Section */}

                        

                       


                    </div>

                </div>
            </div>
        </div>

      </div>
    );
  }
}

export default ViewCourses;