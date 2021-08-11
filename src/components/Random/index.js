import React from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { addPic, deleteField, logout } from '../../firebase';
import LikedImages from './LikedImages';
import RandomImage from './RandomImage';
import { getPhotos, randomPic } from '../../unsplash';
import pic from '../../images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';

function Random(props) {
  const [toggle, updateToggle] = React.useState('randomImage');
  const { user } = props;
  const { picArr } = user;
  const [photoArr, setPhotoArr] = React.useState([]);
  const [picture, setPicture] = React.useState(pic);
  const [picId, setPicId] = React.useState('');
  const [errMessage, setErrMessage] = React.useState('Loading! Please wait');
  const [err, setErr] = React.useState(false);
  //get a random picture from unsplash
  const getRandomPic = async () => {
    const { photo, id, message } = await randomPic();
    setPicture(photo);
    setPicId(id);
    if (message !== '') {
      setErr(true);
      setErrMessage('Sorry! Limit exceeded. Try after sometime');
    }
    console.log('message', message);
  };

  //get all liked pics from unsplash
  const getPics = async (picArr) => {
    const photos = await getPhotos(picArr);
    setPhotoArr(photos);
  };

  const handleLike = async () => {
    getRandomPic();
    console.log('pic Id', picId);
    if (picId) {
      const newUser = await addPic(user, picId);
      const { picArr } = newUser;
      const photos = await getPhotos(picArr);
      setPhotoArr(photos);
    }
  };
  const handleDisLike = () => {
    getRandomPic();
  };

  //delete a liked photo
  const deleteLiked = async (id) => {
    console.log('delete item id', id);
    const updatedUser = await deleteField(user, id);
    const { picArr } = updatedUser;
    const photos = await getPhotos(picArr);
    setPhotoArr(photos);
  };

  React.useEffect(() => {
    getPics(picArr);
  }, [picArr]);

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
        <Tab eventKey="liked" title="Profile">
          <LikedImages
            user={user}
            photoArr={photoArr}
            deleteLiked={deleteLiked}
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
