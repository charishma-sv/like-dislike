import React from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { logout } from '../../firebase';
import LikedImages from './LikedImages';
import RandomImage from './RandomImage';
import { getPhotos } from '../../unsplash';

function Random(props) {
  const [toggle, updateToggle] = React.useState('randomImage');
  const { user } = props;
  const { picArr } = user;
  const [photoArr, setPhotoArr] = React.useState([]);

  const getPics = async () => {
    const photos = await getPhotos(picArr);
    setPhotoArr(photos);
  };

  React.useEffect(() => {
    getPics();
  }, []);

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
          <RandomImage user={user} />
        </Tab>
        <Tab eventKey="liked" title="Profile">
          <LikedImages user={user} photoArr={photoArr} />
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
