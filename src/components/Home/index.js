import React from 'react';
import { Button, Container } from 'react-bootstrap';
import like from '../../images/like_and_dislike.png';
function Home() {
  return (
    <Container fluid className="p-0 vh-100 text-center home-bg">
      <Container className="mb-4">
        <h1 className="header">Like or Dislike</h1>
        <img alt="" src={like} className="image pt-4" />
      </Container>
      <Container className="btn-container mb-4">
        <Button className="mr-2" variant="dark" size="lg">
          Login
        </Button>
        <Button className="mr-2" variant="dark " size="lg">
          Signup
        </Button>
      </Container>
    </Container>
  );
}

export default Home;
