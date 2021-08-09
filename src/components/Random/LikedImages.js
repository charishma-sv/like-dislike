import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LikedImages(props) {
  const { photoArr } = props;
  console.log('pic arr in liked', photoArr);
  return (
    <Container>
      <Container className="d-flex flex-wrap justify-content-center random-bg">
        {photoArr.map((photo) => (
          <Card key={photo.id} style={{ width: '18rem', margin: '15px' }}>
            <Card.Img variant="top" src={photo.urls.full} height="250px" />
            <Card.Body>
              <Card.Title>
                Photo by <a href={photo.user.links.html}>{photo.user.name}</a>
              </Card.Title>
              <Card.Text style={{ height: '28px', overflow: 'hidden' }}>
                {photo.description}
              </Card.Text>
              <a href={photo.links.html}>
                <Button variant="primary">Show</Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Container>
  );
}

export default LikedImages;
