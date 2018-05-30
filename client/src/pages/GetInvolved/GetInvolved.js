import React, { Component } from "react";
import "./GetInvolved.css";

class GetInvolved extends Component {
  state = {

  };

  // the "html" (jsx) for the page goes within the render method's return statement, inside the parenthesis
  render() {
    return (
        <div id="content">
            <div className="container" id="main-content">
                <div className="row">
                    <div className="col-lg-12" id="involve-top">
                        <h2 className="white-txt display-3 text-center"><strong>Like to code?</strong></h2>
                        <h4 className="white-txt text-center">Help us finish this project </h4>
                        <p className="text-center"><a  href=""><i id="gitinvolved" className="fa fa-github icon-style-2"></i></a></p>
                    </div>
                </div>
                <br /> <br />
                <hr />
                <br /> <br />
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="white-txt display-2 "><strong className="underline-header">Technologies</strong></h2>
                    </div>
                </div> <br /> <br /> <br /> <br />
                <div className="row">
                    <div className="col-lg-4">
                        <img id="react-img" alt="React" src={require("./react.png")} />
                    </div>
                    <div className="col-lg-4">
                        <img id="bootstrap-img" alt="Bootstrap" src={require("./bootstrap.png")} />
                    </div>
                    <div className="col-lg-4">
                        <img id="mongodb-img" alt="MongoDB" src={require("./mongodb.png")} />
                    </div>
                </div>
                <br /> <br /> <br />
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="white-txt display-2 text-right"><strong className="underline-header">Languages</strong></h2>
                    </div>
                </div> <br /> <br /> <br /> <br />
                <div className="row">
                    <div className="col-lg-4">
                        <img id="html-img" alt="HTML" src={require("./html.png")} />
                    </div>
                    <div className="col-lg-4">
                        <img id="css-img" alt="CSS" src={require("./css.png")} />
                    </div>
                    <div className="col-lg-4">
                        <img id="js-img" alt="JS" src={require("./javascript.png")} />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default GetInvolved;

