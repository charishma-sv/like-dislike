import React from 'react';
import { Container } from 'react-bootstrap';
import dislike from '../../images/black-thumb-dislike-product.png';
import like from '../../images/like-thumb-black-product.png';
function RandomImage(props) {
  const [message, setMessage] = React.useState('');
  const liked = () => {
    props.handleLike();
    if (props.picId) {
      setMessage('photo liked');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  };
  const disLiked = () => {
    props.handleDisLike();
    if (props.picId) {
      setMessage('photo disliked');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  };
  React.useEffect(() => {
    props.getRandomPic();
  }, [props]);
  return (
    <Container>
      <Container fluid className="random-img p-0">
        {props.err && <h5>{props.errMessage}</h5>}
        <img src={props.picture} alt="" className="h-100" />
      </Container>
      <Container className="mt-4 ">
        <img
          src={like}
          alt="like"
          className="btn random-btn d-inline"
          onClick={() => liked()}
        />
        <span
          className="bg-dark"
          style={{ color: 'white', width: 'fit-content' }}
        >
          {message}
        </span>
        <img
          src={dislike}
          alt="like"
          className=" btn random-btn d-inline"
          onClick={() => disLiked()}
        />
      </Container>
    </Container>
  );
}

export default RandomImage;
