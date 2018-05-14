import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CourseOverview from "./pages/CourseOverview";
import ManageCourse from "./pages/ManageCourse";
import MyCourses from "./pages/MyCourses";
import NavBar from "./components/NavBar";

import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/course-overview" component={CourseOverview} />
          <Route exact path="/manage-course" component={ManageCourse} />
          <Route exact path="/my-courses" component={MyCourses} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
);

export default App;