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
      <Container className="mt-4 ">
        {/* <Container className="w-25 m-0"> */}
        <img
          src={like}
          alt="like"
          className="btn random-btn d-inline"
          onClick={() => props.handleLike()}
        />
        {/* </Container> */}
        <span
          className="bg-dark"
          style={{ color: 'white', width: 'fit-content' }}
        >
          photo liked
        </span>
        {/* <Container className="w-25 m-0"> */}
        <img
          src={dislike}
          alt="like"
          className=" btn random-btn d-inline"
          onClick={() => props.handleDisLike()}
        />
        {/* </Container> */}
      </Container>
    </Container>
  );
}

export default RandomImage;
