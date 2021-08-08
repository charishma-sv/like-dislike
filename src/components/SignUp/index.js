import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';

function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  console.log('email, name,password', email, name, password);
  const onChangeHandler = (event) => {
    console.log('inside change event', event);
    const { id, name, value } = event.target;
    console.log('id,', id);
    if (id === 'name-input') {
      console.log('inside user name');
      setName(value);
    } else if (id === 'email-input') {
      console.log('inside user email');
      setEmail(value);
    } else if (id === 'password-input') {
      setPassword(value);
    }
  };
  return (
    <Container className="mw-100 vh-100 d-flex align-items-center">
      <Container className="w-50 h-75">
        <Form className="">
          <Form.Group className="mb-3">
            <FloatingLabel
              label="Name"
              className="mb-3"
              id="name"
              name="userName"
              onChange={(event) => onChangeHandler(event)}
              value={name}
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel
              label="Email address"
              className="mb-3"
              id="email"
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
            <FloatingLabel
              label="password"
              className="mb-3"
              id="password"
              name="userPassword"
              value={password}
              onChange={(event) => onChangeHandler(event)}
            >
              <Form.Control type="password" placeholder="name@example.com" />
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
