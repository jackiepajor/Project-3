import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import "./Home.css";
import axios from 'axios';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    if (axios.defaults.headers.common['Authorization'] === null) {
      this.props.history.push("/login");
    }
    // axios.get('/api/course')
    //   .then(res => {
    //     this.setState({ courses: res.data });
    //     console.log(this.state.courses);
    //   })
    //   .catch((error) => {
    //     if(error.response.status === 401) {
    //       this.props.history.push("/login");
    //     }
    //   });
  }

  // Logout function can be called somewhere...
  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid" id="main-jumbo">
          
        </div>
        <div className="container">
          
        </div>
      </div>
    );
  }
}

export default Home;