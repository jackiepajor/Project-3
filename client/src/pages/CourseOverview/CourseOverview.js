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
                  <div id="catalog-search">
                    <form className="ml-auto" id="formm"> 
                      <div className="md-form mt-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" id="input-part" />
                        {/* <button className="btn search-btn"><i class="fa fa-search" aria-hidden="true"></i></button> */}
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
                    <h4 className="white-txt">Business Fundementals</h4>
                  </div>
                </div>
              </div>
              <div className="container" id="courses-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Business Analysis Fundementals</strong></h5>
                          <p>Learn the Core Concepts in Business Analysis</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>How To Market Your Business</strong></h5>
                          <p>How to create a successful marketing plan for your business</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Business Planning & Forecasting</strong></h5>
                          <p>Learn the basics of business planning & forecasting process</p>
                          
                        </div>                          
                      </div>    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>How To Budget Your Business</strong></h5>
                          <p>Learn the core fundementals to efficiently budget your business</p>
                          
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
                    <h4 className="white-txt">Web Development</h4>
                  </div>
                </div>
              </div>
              <div className="container" id="courses-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Learn Javascript</strong></h5>
                          <p>Advance your Web Development Skills By Learning Javascript from JavaScript Expert</p>
                          
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>HTML Tutorial For Beginners</strong></h5>
                          <p>Become a web-developer with the wire-fram coding language</p>
                          
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Introduction To Web Development</strong></h5>
                          <p>Are you Interested in Learning Web Development?</p>
                          
                        </div>                          
                      </div>    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Web Development Made Easy</strong></h5>
                          <p>Learn how to see web development as a puzzle and just fit the pieces together</p>
                          
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
                    <h4 className="white-txt">Social Media Marketing</h4>
                  </div>
                </div>
              </div>
              <div className="container" id="courses-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Using Instagram Influencers</strong></h5>
                          <p>How to get popular instagram pages to sponsor your product</p>
                          
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Facebook Marketing Crash Course</strong></h5>
                          <p>Why Facebook Marketing is the most powerful form of online marketing</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>SMMA ROI Workshop</strong></h5>
                          <p>How to maintain a profitable SMMA Business</p>
                        
                        </div>                          
                      </div>    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Get Sales With Pinterest</strong></h5>
                          <p>Understand how free marketing efforts can triple your business revenue</p>
                    
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
                    <h4 className="white-txt">Graphic Design</h4>
                  </div>
                </div>
              </div>
              <div className="container" id="courses-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Adobe Illustrator Made Easy</strong></h5>
                          <p>Make a professionaly designed logo in one hour</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Adobe Creative Suite</strong></h5>
                          <p>Learn the intro into the Adobe Creative Suite.</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Canva - A Graphic Design Short Cut</strong></h5>
                          <p>Volume2 to graphic design theory using Canva.</p>
                          
                        </div>                          
                      </div>    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Master Logo Design With Photoshop</strong></h5>
                          <p>How to become a freelance designer with the power of Photoshop</p>
                          
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
                    <h4 className="white-txt">Personal Development</h4>
                  </div>
                </div>
              </div>
              <div className="container" id="courses-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Double Your Productivity</strong></h5>
                          <p>Learn to eliminate information overload and get motivated</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Master Your Brain</strong></h5>
                          <p>Discover how this approach can help with stress, self confidence...</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Achieve ALL Of Your Goals</strong></h5>
                          <p>Set goals the quick and easy way for self-improvement</p>
                          
                        </div>                          
                      </div>    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Time Management Made Simple</strong></h5>
                          <p>Win back your life with powerful time management skills</p>
                          
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
                    <h4 className="white-txt">Photography</h4>
                  </div>
                </div>
              </div>
              <div className="container" id="courses-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Premiere Pro Masterclass</strong></h5>
                          <p>Edit your photos like a pro with Premiere</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Professional Photography Crashcourse</strong></h5>
                          <p>How to Take & Sell Photos for Beginners & Advanced Photographers</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Mastering Camera Raw</strong></h5>
                          <p>Create Breathtaking Images in Photoshop by Mastering Camera Raw</p>
                          
                        </div>                          
                      </div>    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Your Road to Better Photography</strong></h5>
                          <p>Photography Made Simple!</p>
                          
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
                    <h4 className="white-txt">IT & Software</h4>
                  </div>
                </div>
              </div>
              <div className="container" id="courses-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>AWS Certified Solutions</strong></h5>
                          <p>Learn the fundementals of AWS</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Computer Cyber Security</strong></h5>
                          <p>Advanced skillset in defeating online threats</p>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Learn Website Hacking</strong></h5>
                          <p>Learn how to hack websites and apps like a moron</p>
                          
                        </div>                          
                      </div>    
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="container course-view">
                      <div className="row">
                        <div className="col-sm-12 course-img">
                          <h5 className="course-title"><strong>Active Directory Policy Lab</strong></h5>
                          <p>REAL job skills necessary in the IT world</p>
                          
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