import React from 'react';
import { Container } from 'react-bootstrap';
import like from '../../images/like_and_dislike.png';
function Home() {
  return (
    <Container fluid className="p-0 vh-100 text-center home-bg">
      <Container>
        <h1 className="header">Like or Dislike</h1>
        <img alt="" src={like} className="image pt-4" />
      </Container>
    </Container>
  );
}

export default Home;
