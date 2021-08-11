import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

function LikedImages(props) {
  //const { urlArr } = props;
  const { liked } = props;
  console.log('liked Arr', liked);
  return (
    <Container>
      <Container className="d-flex flex-wrap justify-content-center random-bg">
        {liked &&
          liked.map((pic) => (
            <Card key={pic.picId} style={{ width: '18rem', margin: '15px' }}>
              <Card.Img variant="top" src={pic.url} height="250px" />
              <Card.Body>
                <a href={pic.url} className="mr-4">
                  <Button variant="primary">Show</Button>
                </a>

                <Button
                  variant="primary"
                  onClick={() => props.deleteLiked(pic.picId)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        {/* {photoArr &&
          photoArr.map((photo) => (
            <Card key={photo.id} style={{ width: '18rem', margin: '15px' }}>
              <Card.Img variant="top" src={photo.urls.full} height="250px" />
              <Card.Body>
                <Card.Title>
                  Photo by <a href={photo.user.links.html}>{photo.user.name}</a>
                </Card.Title>
                <Card.Text style={{ height: '28px', overflow: 'hidden' }}>
                  {photo.description}
                </Card.Text>
                <a href={photo.links.html} className="mr-4">
                  <Button variant="primary">Show</Button>
                </a>

                <Button
                  variant="primary"
                  onClick={() => props.deleteLiked(photo.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))} */}
      </Container>
    </Container>
  );
}

export default LikedImages;
