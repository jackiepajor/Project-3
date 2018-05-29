import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          </div>
          <br /><br /><br /><br />

          

          <div className="container">
            <div className="row">
              <div className="col-xl-8">

              </div>
              <div className="col-xl-4">

              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <h4 className="display-4 white-txt">Enrolled Courses</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
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
              <div className="col-md-3">
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
              <div className="col-md-3">
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
              <div className="col-md-3">
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
            <div className="row">
              <div className="col-lg-12">
                <h3 className="display-4 white-txt">Completed Courses</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
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
              <div className="col-md-3">
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
              <div className="col-md-3">
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
              <div className="col-md-3">
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

            <hr /><br />

            <div className="row">
              <div className="col-md-12">
                <h3 className="display-2 text-center"><strong className="white-txt" id="my-courses">My Courses</strong></h3>
              </div>
            </div><br /> <br />

            <div className="row">
              <div className="col-lg-12">
                <h3 className="display-4 white-txt">Published</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
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
              <div className="col-md-3">
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
              <div className="col-md-3">
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
              <div className="col-md-3">
                {/* <div className="container course-view">
                  <div className="row">
                    <div className="col-sm-12 course-img">
                      <h5 className="course-title"><strong>Course Title</strong></h5>
                      <p>Course Summary</p>
                      <p className="course-author">Author</p>
                    </div>                          
                  </div>
                </div> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h3 className="display-4 white-txt">Drafts</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
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
              <div className="col-md-3">
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
              <div className="col-md-3">
                {/* <div className="container course-view">
                  <div className="row">
                    <div className="col-sm-12 course-img">
                      <h5 className="course-title"><strong>Course Title</strong></h5>
                      <p>Course Summary</p>
                      <p className="course-author">Author</p>
                    </div>                          
                  </div>
                </div> */}
              </div>
              <div className="col-md-3">
                {/* <div className="container course-view">
                  <div className="row">
                    <div className="col-sm-12 course-img">
                      <h5 className="course-title"><strong>Course Title</strong></h5>
                      <p>Course Summary</p>
                      <p className="course-author">Author</p>
                    </div>                          
                  </div>
                </div> */}
              </div>
            </div>
          </div>

        
          <div className="container" id="btn-area">
            <div className="row">
              <div className="col-md-12 text-center">
                <Link to="/course-creator/create/course"><button className="btn btn-nav" id="new-btn">New Course</button></Link>
              </div>
            </div>
          </div>
        

        
      </div>
      </div>
    );
  }
}

export default MyCourses;