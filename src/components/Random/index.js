import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import LikedImages from './LikedImages';
import RandomImage from './RandomImage';

function Random() {
  const [toggle, updateToggle] = React.useState('randomImage');

  return (
    <Container fluid className="p-0 vh-100 text-center random-bg">
      <Tabs
        varient="pills"
        activeKey={toggle}
        onSelect={(k) => updateToggle(k)}
        className="mb-3"
      >
        <Tab eventKey="randomImage" title="Home">
          <RandomImage />
        </Tab>
        <Tab eventKey="liked" title="Profile">
          <LikedImages />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Random;
