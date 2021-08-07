import React from 'react';
import { Container } from 'react-bootstrap';
import pic from '../../images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';
import like from '../../images/black-thumb-dislike-product.png';
import dislike from '../../images/like-thumb-black-product.png';
function RandomImage() {
  return (
    <Container className="random">
      <Container fluid className="random-img p-0">
        <img src={pic} alt="" className="h-100 mt-4" />
      </Container>
      <Container className="mt-4">
        <img src={like} alt="like" className="btn random-btn" />

        <img src={dislike} alt="like" className=" btn random-btn" />
      </Container>
    </Container>
  );
}

export default RandomImage;
