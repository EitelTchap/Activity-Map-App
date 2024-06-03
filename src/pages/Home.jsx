import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function Home() {
  return (
    <div>
      <Hero backgroundImage="Clifton_Suspension_Bridge.jpg">
        <h1>Activity Map - Bristol Basketball</h1>
        <h2>Find your activity</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Activity Map!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Activity Map lets you find the right activity for you in an intuitive way.
            </p>
            <p>
              All you gotta do is search for your activity and browse through all the potential clubs that offer it.
            </p>
            <p>
              Simple, right?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
