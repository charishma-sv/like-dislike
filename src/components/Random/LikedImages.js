import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

function LikedImages(props) {
  const { liked } = props;
  console.log('liked', liked);
  return (
    <Container>
      <Container className="d-flex flex-wrap justify-content-center random-bg">
        {typeof liked != 'undefined' &&
        liked != null &&
        liked.length != null &&
        liked.length > 0 ? (
          liked.map((photo) => (
            <Card key={photo.id} style={{ width: '18rem', margin: '15px' }}>
              <Card.Img variant="top" src={photo.url} height="250px" />
              <Card.Body>
                <Card.Title>
                  Photo by <a href={photo.html}>{photo.name}</a>
                </Card.Title>
                <Card.Text style={{ height: '28px', overflow: 'hidden' }}>
                  {photo.description}
                </Card.Text>
                <a href={photo.html} className="mr-4">
                  <Button variant="primary">Show</Button>
                </a>

                <Button
                  variant="primary"
                  onClick={() => props.deleteLiked(photo.picId)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Container className="h-50">
            <img height="300px" alt="unavailable" src={props.noImage} />
          </Container>
        )}
      </Container>
    </Container>
  );
}

export default LikedImages;
