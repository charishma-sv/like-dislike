import React from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { addPic, deleteField, getPhotoDocument, logout } from '../../firebase';
import LikedImages from './LikedImages';
import RandomImage from './RandomImage';
import { randomPic } from '../../unsplash';
import pic from '../../images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';
import noImage from '../../images/no-image.jpeg';
function Random(props) {
  const [toggle, updateToggle] = React.useState('randomImage');
  const { user } = props;
  const { picArr } = user;
  const [picture, setPicture] = React.useState(pic);
  const [picId, setPicId] = React.useState('');
  const [errMessage, setErrMessage] = React.useState('Loading! Please wait');
  const [err, setErr] = React.useState(false);
  const [urlArr, setUrlArr] = React.useState([]);
  const [liked, setLiked] = React.useState([]);

  //get a random picture from unsplash
  const getRandomPic = async () => {
    const { photo, id, message } = await randomPic();
    if (message !== undefined) {
      setErr(true);
      setErrMessage('Sorry! Limit exceeded. Try after sometime');
      setPicture(noImage);
      console.log('im in random pic if');
    } else {
      console.log('im in random pic else');
      setPicture(photo);
      setPicId(id);
    }
  };

  //get all liked pics form firestore
  const getLinks = async (user) => {
    const { pics } = await getPhotoDocument(user);
    if (pics) {
      console.log('pics in getlinks', pics);
      let photoUrls = [];
      pics.map((picData) => photoUrls.push(picData.url));
      setUrlArr(photoUrls);
      setLiked(pics);
    }
  };

  //handle likes
  const handleLike = async () => {
    getRandomPic();
    if (picId) {
      await addPic(user, picId);
      await getLinks(user);
    }
  };
  const handleDisLike = () => {
    getRandomPic();
  };

  //delete a liked photo
  const deleteLiked = async (id) => {
    await deleteField(user, id);
    await getLinks(user);
  };

  React.useEffect(() => {
    getRandomPic();
    getLinks(user);
  }, [user]);

  return (
    <Container fluid className="p-0 vh-100 text-center random">
      <Tabs
        varient="pills"
        activeKey={toggle}
        onSelect={(k) => updateToggle(k)}
        className="mb-3"
      >
        <Tab eventKey="randomImage" title="Home">
          <RandomImage
            user={user}
            handleLike={handleLike}
            handleDisLike={handleDisLike}
            getRandomPic={getRandomPic}
            picture={picture}
            picArr={picArr}
            picId={picId}
            err={err}
            errMessage={errMessage}
          />
        </Tab>
        <Tab eventKey="liked" title="Liked Photos">
          <LikedImages
            user={user}
            deleteLiked={deleteLiked}
            urlArr={urlArr}
            liked={liked}
            noImage={noImage}
          />
        </Tab>
      </Tabs>
      <Container className="float-right fixed-top">
        <Button
          className="logout-btn"
          variant="primary"
          type="submit"
          onClick={(event) => logout()}
        >
          Logout
        </Button>
      </Container>
    </Container>
  );
}

export default Random;
