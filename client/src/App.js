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
import Contact from "./pages/ContactUs";
import NoMatch from "./pages/NoMatch";
import axios from 'axios';


class App extends Component {

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
        {localStorage.getItem('jwtToken') &&
                    <button class="btn btn-nav" onClick={this.logout}>Logout</button>
                  }
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

export default App;