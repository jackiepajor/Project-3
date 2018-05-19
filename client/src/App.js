import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CourseOverview from "./pages/CourseOverview";
import ManageCourse from "./pages/ManageCourse";
import MyCourses from "./pages/MyCourses";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CourseCreatorInterface from "./components/CourseCreatorInterface";
import CourseCreator from "./pages/CourseCreator";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/ContactUs";
import NoMatch from "./pages/NoMatch";
import Form from "./pages/ContactUs/Form";


const App = () => (
  <Router>
    <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/course-overview" component={CourseOverview} />
          <Route exact path="/course-creator" component={CourseCreator} />
          <Route exact path="/manage-course" component={ManageCourse} />
          <Route exact path="/my-courses" component={MyCourses} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/contact-us" component={Form} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
    </div>
  </Router>
);

export default App;