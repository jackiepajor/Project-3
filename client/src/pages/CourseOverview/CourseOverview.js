import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "../../components/Grid";
import "./CourseOverview.css";

class CourseOverview extends Component {
  state = {

  };

  // the "html" (jsx) for the page goes within the render method's return statement, inside the parenthesis
  render() {
    return (
      <div>
         <div className="catalog-content">
        <div className="container outer-box">
          <div id="catalog-header">
            <div className="container text-center" id="catalog-header-space">
              <div className="row">
                <div className="col-lg-12">
                  {/* <button class="btn text-uppercase" id="catalog-btn">Create a course</button> */}                   
                  <div className id="catalog-search">
                    <form className="form-inline ml-auto">
                      <div className="md-form mt-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container topic-box">
            <div className="row">
              <div className="container category-title">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="white-txt">Topic or Category</h4>
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
                    <h4 className="white-txt">Topic or Category</h4>
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
                    <h4 className="white-txt">Topic or Category</h4>
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

export default CourseOverview;