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
import Form from "./pages/ContactUs";
import NoMatch from "./pages/NoMatch";
import ViewCourses from "./pages/ViewCourses";
import CourseViewer from "./pages/CourseViewer";
import CourseCreation from "./components/CourseCreation";
import UnitCreation from "./components/UnitCreation";
import GetInvolved from "./pages/GetInvolved";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// const renderNavButtons = () => {
//   let path = window.location.pathname;
//   switch(path) {
//     case "/":
//     case "/home":
//       return (
//         <button>DYNAMIC</button>
//       );
//       break;
//     case "/login":
//       return (
//         <button>blarg</button>
//       );
//       break;
//     case "/course-creator":
//       // render different buttons on the navbar
//       return (
//         <button>DYNAMIC</button>
//       );
//       break;
//     default:
//       return (
//         <button>You suck LIKE A LOT!!!!</button>
//       )
//       break;
//   }
// };

const App = (props) => (
  <Router>
    <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/course-overview" component={CourseOverview} />
          <Route path="/course-creator" component={CourseCreator} />
          <Route exact path="/manage-course" component={ManageCourse} />
          <Route exact path="/my-courses" component={MyCourses} />
          <Route exact path="/our-team" component={OurTeam} />
          <Route exact path="/course-viewer/:course_id" component={CourseViewer} />
          <Route exact path="/contact-us" component={Form} />
          <Route exact path="/get-involved" component={GetInvolved} />
          <Route exact path="/privacy" component={PrivacyPolicy} />
          <Route exact path="/terms" component={Terms} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
    </div>
  </Router>
);

export default App;