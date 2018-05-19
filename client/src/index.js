import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CourseOverview from "./pages/CourseOverview";
import CourseCreator from "./pages/CourseCreator";
import CourseCreatorInterface from "./components/CourseCreatorInterface";
import ManageCourse from "./pages/ManageCourse";
import MyCourses from "./pages/MyCourses";
import OurTeam from "./pages/OurTeam";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

ReactDOM.render(
  <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/course-overview' component={CourseOverview} />
          <Route path='/course-creator' component={CourseCreator} />
          <Route path='/manage-course' component={ManageCourse} />
          <Route path='/my-courses' component={MyCourses} />
          <Route path='/our-team' component={OurTeam} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
  </Router>,
  document.getElementById("root")
);