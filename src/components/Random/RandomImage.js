import React from 'react';
import { Container } from 'react-bootstrap';
import dislike from '../../images/black-thumb-dislike-product.png';
import like from '../../images/like-thumb-black-product.png';
function RandomImage(props) {
  React.useEffect(() => {
    props.getRandomPic(props.picArr);
  }, [props]);
  return (
    <Container>
      <Container fluid className="random-img p-0">
        <img src={props.picture} alt="" className="h-100" />
      </Container>
      <Container className="mt-4">
        <img
          src={like}
          alt="like"
          className="btn random-btn"
          onClick={() => props.handleLike()}
        />
        <img
          src={dislike}
          alt="like"
          className=" btn random-btn"
          onClick={() => props.handleDisLike()}
        />
      </Container>
    </Container>
  );
}

export default RandomImage;
