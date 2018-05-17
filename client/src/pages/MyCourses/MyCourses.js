import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "../../components/Grid";
import "./MyCourse.css";

class MyCourses extends Component {
  state = {

  };

 
  render() {
    return (
      <div>
        <div id="profile-content">
        <br /><br /><br /><br /><br /><br /><br />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="display-1 text-center"><strong className="white-txt" id="profileNameDisplay">John Doe</strong></h3>
            </div>
          </div>
          <br /><br /><br /><br />
          <div className="container topic-box">
            <div className="row">
              <div className="container category-title">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="white-txt display-4">Enrolled Courses</h4>
                  </div>
                </div>
              </div>
              <div className="container" id="courses-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Course Title</strong></h5>
                          <p>Course Summary</p>
                          <p className="course-author">Author</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Course Title</strong></h5>
                          <p>Course Summary</p>
                          <p className="course-author">Author</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Course Title</strong></h5>
                          <p>Course Summary</p>
                          <p className="course-author">Author</p>
                        </div>                          
                      </div>    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Course Title</strong></h5>
                          <p>Course Summary</p>
                          <p className="course-author">Author</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                </div> 
              </div>                  
            </div>
          </div>
          <hr />
          <div className="container topic-box">
            <div className="row">
              <div className="container category-title">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="white-txt display-4">Completed Courses</h4>
                  </div>
                </div>
              </div>
              <div className="container" id="courses-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Course Title</strong></h5>
                          <p>Course Summary</p>
                          <p className="course-author">Author</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Course Title</strong></h5>
                          <p>Course Summary</p>
                          <p className="course-author">Author</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Course Title</strong></h5>
                          <p>Course Summary</p>
                          <p className="course-author">Author</p>
                        </div>                          
                      </div>    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Course Title</strong></h5>
                          <p>Course Summary</p>
                          <p className="course-author">Author</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                </div> 
              </div>                  
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default MyCourses;