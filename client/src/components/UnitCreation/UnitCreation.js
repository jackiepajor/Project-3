import React from "react";
import "./UnitCreation.css";

const UnitCreation = props => (


    <div className="main-content">
    <br /><br /><br /><br /><br /><br />
   
    <div className="container white-txt">
      <h3 className="display-3"><strong>Unit Creator</strong></h3>
      <hr />
      <blockquote><strong>How to </strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere temporibus mollitia eos ipsa dolore amet laboriosam distinctio. Non quidem tenetur a, rem aperiam exercitationem laborum ratione illum atque? Tempora mollitia ratione recusandae quo explicabo officiis dolores deleniti natus sunt aspernatur.</blockquote>
      <hr />
    </div>

    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="display-3" contentEditable="true">Add Unit Title...</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p contentEditable="true">Add Description...</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <button type="button" className="btn btn-hopper btn-course btn-lg">Add Unit</button>
      </div>
    </div>
  </div>

);

export default UnitCreation;