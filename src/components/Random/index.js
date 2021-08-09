import React from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { getUserDocument, logout } from '../../firebase';
import LikedImages from './LikedImages';
import RandomImage from './RandomImage';

function Random(props) {
  const [toggle, updateToggle] = React.useState('randomImage');
  const { user } = props;
  const [likedArr, setLikedArr] = React.useState([]);

  const getLikedList = async (user) => {
    const userData = await getUserDocument(user);
    console.log('user data in random', userData);
  };
  React.useEffect(() => {
    getLikedList(user);
  });
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
          <LikedImages likedArr={likedArr} />
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
