import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pic from '../../images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';
import like from '../../images/black-thumb-dislike-product.png';
import dislike from '../../images/like-thumb-black-product.png';
function Random() {
  return (
    <Container fluid className="p-0 vh-100 text-center random-bg">
      <Container>
        <img src={pic} alt="" className="w-50 h-25" />
      </Container>
      <Container>
        <a href="#">
          <img src={like} alt="like" />
        </a>
        <a href="#">
          <img src={dislike} alt="like" />
        </a>
      </Container>
    </Container>
  );
}

export default Random;
