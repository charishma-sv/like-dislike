import React from 'react';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import pic from '../../images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';
import like from '../../images/black-thumb-dislike-product.png';
import dislike from '../../images/like-thumb-black-product.png';
function Random() {
  return (
    <Container fluid className="p-0 vh-100 text-center random-bg">
      <Row className="vh-100">
        <Col
          sm={2}
          className="d-flex flex-column  bg-light justify-content-center"
        >
          <Nav defaultActiveKey="link-1" className="flex-column">
            <Nav.Link eventKey="link-1">
              <h1>Random</h1>
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <h1>Liked</h1>
            </Nav.Link>
          </Nav>
        </Col>
        <Col sm={10} className="position-relative">
          <Container className="random">
            <Container fluid className="random-img p-0">
              <img src={pic} alt="" className="h-100 mt-4" />
            </Container>
            <Container className="mt-4">
              <img src={like} alt="like" className="btn random-btn" />

              <img src={dislike} alt="like" className=" btn random-btn" />
            </Container>
          </Container>
          <Container className="liked d-none">
            <Container className="d-flex justify-content-center">
              <Card style={{ width: '18rem', margin: '15px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', margin: '15px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Container>
          </Container>
        </Col>
      </Row>

      <Container className="random-liked"></Container>
    </Container>
  );
}

export default Random;
