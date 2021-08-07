import React from 'react';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import LikedImages from './LikedImages';
import RandomImage from './RandomImage';

function Random() {
  const [toggle, updateToggle] = React.useState('active');
  const clickHandler = () => {};
  return (
    <Container fluid className="p-0 vh-100 text-center random-bg">
      <Row className="vh-100">
        <Col
          sm={2}
          className="d-flex flex-column  bg-light justify-content-center"
        >
          <Nav defaultActiveKey="link-1" className="flex-column">
            <Nav.Link eventKey="link-1" onClick={(event) => clickHandler()}>
              <h1>Random</h1>
            </Nav.Link>
            <Nav.Link eventKey="link-2" onClick={(event) => clickHandler()}>
              <h1>Liked</h1>
            </Nav.Link>
          </Nav>
        </Col>
        <Col sm={10} className="position-relative">
          <RandomImage />
          <LikedImages />
        </Col>
      </Row>

      <Container className="random-liked"></Container>
    </Container>
  );
}

export default Random;
