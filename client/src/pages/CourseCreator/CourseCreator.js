import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import CourseCreatorInterface from "../../components/CourseCreatorInterface";

class CourseCreator extends Component {
    state = {
  
    };

  render() {
    return (
        <CourseCreatorInterface>

        <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="display-3" contenteditable="true">Course Title</h4>
              </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                  <p contenteditable="true">Description</p>
                </div>
            </div>
          </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button">Add</button>
                  </div>
                  <select className="custom-select" id="inputGroupSelect03">
                    <option selected>Course Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-secondary" type="button">Add</button>
                     </div>
                        <input type="text" className="form-control" placeholder="Course Requirements" aria-label="" aria-describedby="basic-addon1" />
                  </div>
            </div>
          </div>
         
        </div>
       

        <div className="container">
                <button type="button" className="btn btn-lg btn-secondary butt">Add Unit</button>
        </div>
    
        </CourseCreatorInterface>
    );
  }
}

export default CourseCreator;