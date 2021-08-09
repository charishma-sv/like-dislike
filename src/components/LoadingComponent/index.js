import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

function LoadingComponent() {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Spinner animation="grow" />
    </Container>
  );
}

export default LoadingComponent;
