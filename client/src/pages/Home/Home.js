import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";

class Home extends Component {
  state = {

  };

  componentDidMount() {
  }

  render() {
    return (
      <Container>

        <Row>
          <Col size="col-12">
            <h2>Hello World!</h2>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Home;