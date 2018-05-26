import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
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
<<<<<<< HEAD
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class App extends Component {
=======
import ViewCourses from "./pages/ViewCourses";
import CourseCreation from "./components/CourseCreation";
import UnitCreation from "./components/UnitCreation";


const renderNavButtons = () => {
  let path = window.location.pathname;
  switch(path) {
    case "/":
    case "/home":
      return (
        <button>DYNAMIC</button>
      );
      break;
    case "/login":
      return (
        <button>blarg</button>
      );
      break;
    case "/course-creator":
      // render different buttons on the navbar
      return (
        <button>DYNAMIC</button>
      );
      break;
    default:
      return (
        <button>You suck LIKE A LOT!!!!</button>
      )
      break;
  }
};

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
          <Route exact path="/view-course" component={ViewCourses} />
          <Route exact path="/contact-us" component={Form} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
    </div>
  </Router>
);
>>>>>>> 172e3e0dbc21f5b92383548774f25cb2581d3f3e

  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/course')
      .then(res => {
        this.setState({ courses: res.data });
        console.log(this.state.courses);
      })
      .catch((error) => {
        if(error) {
          this.props.history.push('/login');
          // window.location.reload('/login');
          // break;
        }
      })
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <Router>
        <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/course-overview" component={CourseOverview} />
              <Route exact path="/course-creator" component={CourseCreator} />
              <Route exact path="/manage-course" component={ManageCourse} />
              <Route exact path="/my-courses" component={MyCourses} />
              <Route exact path="/our-team" component={OurTeam} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
        </div>
      </Router>
    )
  }
};

export default withRouter(App);