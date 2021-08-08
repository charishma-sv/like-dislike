import React from 'react';
import { Container } from 'react-bootstrap';
import pic from '../../images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';
import dislike from '../../images/black-thumb-dislike-product.png';
import like from '../../images/like-thumb-black-product.png';
import { randomPic } from '../../unsplash';
import { generateLikedDocument } from '../../firebase';
function RandomImage() {
  const [picture, setPicture] = React.useState(pic);
  const [likeCount, setLikeCount] = React.useState(0);
  const [picId, setPicId] = React.useState('');
  const [likedId, setLikedId] = React.useState('');

  const getRandomPic = async () => {
    const { photo, id } = await randomPic();
    setPicture(photo);
    setPicId(id);
    console.log('photoId', id);
  };

  React.useEffect(() => {
    getRandomPic();
  }, []);

  const handleLike = () => {
    getRandomPic();
    setLikeCount(likeCount + 1);
    generateLikedDocument(picId);
  };

  const handleDisLike = () => {
    getRandomPic();
  };
  console.log('liked count', likeCount);
  return (
    <Container>
      <Container fluid className="random-img p-0">
        <img src={picture} alt="" className="h-100" />
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
