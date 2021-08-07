import React from 'react';
import { Container } from 'react-bootstrap';
import pic from '../../images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';
import like from '../../images/black-thumb-dislike-product.png';
import dislike from '../../images/like-thumb-black-product.png';
import { randomPic } from '../../unsplash';
function RandomImage() {
  const [picture, setPicture] = React.useState(pic);
  const getRandomPic = async () => {
    const photo = await randomPic();
    setPicture(photo);
    console.log('photo', photo);
  };
  React.useEffect(() => {
    getRandomPic();
  }, []);
  //   console.log('inside random image');
  //   const photo = async () => await randomPic();
  //   console.log('pic', photo);
  return (
    <Container>
      <Container fluid className="random-img p-0">
        <img src={picture} alt="" className="h-100" />
      </Container>
      <Container className="mt-4">
        <img src={like} alt="like" className="btn random-btn" />
        <img src={dislike} alt="like" className=" btn random-btn" />
      </Container>
    </Container>
  );
}

export default RandomImage;
