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
  const [deleted, setDeleted] = React.useState(false);
  const getPics = async (picArr) => {
    const photos = await getPhotos(picArr);
    setPhotoArr(photos);
  };

  React.useEffect(() => {
    getPics(picArr);
  }, [picArr]);
  const [picture, setPicture] = React.useState(pic);
  const [picId, setPicId] = React.useState('');
  const handleLike = async () => {
    getRandomPic();

    const newUser = await addPic(user, picId);
    const { picArr } = newUser;
    const photos = await getPhotos(picArr);
    setPhotoArr(photos);
  };
  const handleDisLike = () => {
    getRandomPic();
  };
  const getRandomPic = async () => {
    const { photo, id } = await randomPic();
    setPicture(photo);
    setPicId(id);
  };

  //delete a liked photo
  const deleteLiked = async (id) => {
    console.log('delete item id', id);
    await deleteField(user, id).then(() => {
      setDeleted(true);
    });
  };
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
          />
        </Tab>
        <Tab eventKey="liked" title="Profile">
          <LikedImages
            user={user}
            photoArr={photoArr}
            deleteLiked={deleteLiked}
            deleted={deleted}
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
