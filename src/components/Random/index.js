import React from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { logout } from '../../firebase';
import LikedImages from './LikedImages';
import RandomImage from './RandomImage';
import { randomPic } from '../../unsplash';
import pic from '../../images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';
import { addPic } from '../../firebase';

function Random(props) {
  const [toggle, updateToggle] = React.useState('randomImage');
  const { user } = props;

  const [picture, setPicture] = React.useState(pic);
  const [picId, setPicId] = React.useState('');

  const randomPic = async () => {
    const { photo, id } = await randomPic();
    setPicture(photo);
    setPicId(id);
    console.log('photoId', id);
  };

  React.useEffect(() => {
    randomPic();
  }, []);

  const addPicture = async () => {
    await addPic(user, picId);
  };
  console.log('user from props in random', user);
  return (
    <Container fluid className="p-0 vh-100 text-center random-bg">
      <Tabs
        varient="pills"
        activeKey={toggle}
        onSelect={(k) => updateToggle(k)}
        className="mb-3"
      >
        <Tab eventKey="randomImage" title="Home">
          <RandomImage user={user} picture={picture} addPicture={addPicture} />
        </Tab>
        <Tab eventKey="liked" title="Profile">
          <LikedImages />
        </Tab>
      </Tabs>
      <Container className="d-flex justify-content-center fixed-bottom">
        <Button
          variant="primary"
          type="submit"
          className=""
          onClick={(event) => logout()}
        >
          Logout
        </Button>
      </Container>
    </Container>
  );
}

export default Random;
