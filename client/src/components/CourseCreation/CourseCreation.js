import React from "react";
import "./CourseCreation.css";

const CourseCreation = props => (


    <div className="main-content">
    <br /><br /><br /><br /><br /><br />
   
    <div className="container white-txt">
      <h3 className="display-3"><strong>Course Creator</strong></h3>
      <hr />
      <blockquote><strong>How to </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere temporibus mollitia eos ipsa dolore amet laboriosam distinctio. Non quidem tenetur a, rem aperiam exercitationem laborum ratione illum atque? Tempora mollitia ratione recusandae quo explicabo officiis dolores deleniti natus sunt aspernatur.</blockquote>
      <hr />
    </div>

    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="display-3" contentEditable="true">Add Course Title...</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p contentEditable="true">Add Description...</p>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button className="btn btn-hopper" type="button">Add</button>
              </div>
              <select className="custom-select" id="category-dropdown">
                <option selected>Course Category</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button className="btn btn-hopper" type="button">Add</button>
              </div>
              <input type="text" className="form-control" placeholder="Course Requirements" aria-label aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <a href=""><button type="button" className="btn btn-hopper btn-course btn-lg">Create Course</button></a>
      </div>
    </div>
  </div>

);

export default CourseCreation;