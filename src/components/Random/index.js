import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import pic from '../../images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';
import like from '../../images/black-thumb-dislike-product.png';
import dislike from '../../images/like-thumb-black-product.png';
function Random() {
  return (
    <Container fluid className="p-0 vh-100 text-center random-bg">
      <Row className="vh-100">
        <Col sm={2} className="d-flex flex-column  justify-content-center">
          <Nav defaultActiveKey="link-1" className="flex-column">
            <Nav.Link eventKey="link-1">Random</Nav.Link>
            <Nav.Link eventKey="link-2">Liked</Nav.Link>
          </Nav>
        </Col>
        <Col sm={10}>
          <Container className="random">
            <Container fluid className="random-img p-0">
              <img src={pic} alt="" className="h-100 mt-4" />
            </Container>
            <Container className="mt-4">
              <img src={like} alt="like" className="btn random-btn" />

              <img src={dislike} alt="like" className=" btn random-btn" />
            </Container>
          </Container>
        </Col>
      </Row>

      <Container className="random-liked"></Container>
    </Container>
  );
}

export default Random;
