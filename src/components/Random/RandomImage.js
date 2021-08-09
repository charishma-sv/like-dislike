import React from 'react';
import { Container } from 'react-bootstrap';
import dislike from '../../images/black-thumb-dislike-product.png';
import like from '../../images/like-thumb-black-product.png';
function RandomImage(props) {
  const [likeCount, setLikeCount] = React.useState(0);

  const handleLike = () => {
    props.randomPic();
    setLikeCount(likeCount + 1);
    props.addPicture();
  };

  const handleDisLike = () => {
    props.randomPic();
  };
  console.log('liked count', likeCount);
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
          onClick={() => handleLike()}
        />
        <img
          src={dislike}
          alt="like"
          className=" btn random-btn"
          onClick={() => handleDisLike()}
        />
      </Container>
    </Container>
  );
}

export default RandomImage;
