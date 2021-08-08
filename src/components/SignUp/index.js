import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';

function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onChangeHandler = (event) => {
    console.log('inside change event', event);
    const { name, value } = event.target;
    if (name === 'userName') {
      console.log('inside user name');
      setName(value);
    } else if (name === 'userEmail') {
      console.log('inside user email');
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };
  console.log('email, name', email, name);
  return (
    <Container className="mw-100 vh-100 d-flex align-items-center">
      <Container className="w-50 h-75">
        <Form className="">
          <Form.Group className="mb-3">
            <FloatingLabel label="Name" className="mb-3">
              <Form.Control
                type="text"
                name="userName"
                value={name}
                placeholder="name@example.com"
                onChange={(event) => onChangeHandler(event)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel
              label="Email address"
              className="mb-3"
              name="userEmail"
              value={email}
              onChange={(event) => onChangeHandler(event)}
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <Form.Text className="text-muted d-none">
              Enter valid email
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <FloatingLabel label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="userPassword"
                value={password}
                onChange={(event) => onChangeHandler()}
              />
            </FloatingLabel>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default SignUp;
