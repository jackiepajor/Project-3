import React from "react";
import { withRouter } from "react-router-dom";
import API from "../../utils/API";
import "./NewCourse.css";

class NewCourse extends React.Component {
  state = {

  };

  renderCourseCategories = (props) => {
    if (props.categories) {
      props.categories.map(category => {
        <option key={category._id} value={category._id}>{category.title}</option>
      });
    }
  };
  
  createCourse = (props) => {
    // grab selected category
    const selectElement = document.getElementById("category-dropdown");
    const selectedCategory = selectElement.options[selectElement.selectedIndex].value;
    const title = document.getElementById("course-title").textContent;
    const description = document.getElementById("course-description").textContent;

    if (selectedCategory !== 'Course Category') {
      // grab all requirements
      const requirements = [];
    
      const newCourse = {};
      newCourse.title = title;
      newCourse.topic = "";
      newCourse.synopsis = description;
      newCourse.category = selectedCategory;
      newCourse.requirements = ["req1", "req2"];
      newCourse.units = [];

      API.createCourse(newCourse)
        .then(function(dbCourse) {
          let course = dbCourse.data;
          //add logic 
          console.log(dbCourse);
          let path = `/course-creator/create/course/${course._id}`;
          
          // navigate to course creation route
          props.history.push(path);
          
          // add course id to session storage
          window.sessionStorage.course_id = course._id;
          
          // update state
          props.handleAddCourse(course);
        })
        .catch(err => console.log(err));
      //props.handleAddCourse(newCourse);
    }
  }

  render() {
    return (
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
                <h4 id="course-title" className="display-3" contentEditable="true">Add Course Title...</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p id="course-description" contentEditable="true">Add Description...</p>
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
                    {
                      this.props.categories ? this.props.categories.map(category => {
                        return <option value={category._id}>{category.title}</option>;
                      })
                        : null
                    }
                    {this.renderCourseCategories(this.props)}
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
            <button type="button" className="btn btn-hopper btn-course btn-lg" onClick={() => this.createCourse(this.props)}>Create Course</button>
            {/* <a href={`/course-creator/create/course/${this.props.course._id}`}><button type="button" className="btn btn-hopper btn-course btn-lg" onClick={() => this.createCourse(this.props)}>Create Course</button></a> */}
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(NewCourse);