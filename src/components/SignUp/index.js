import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';
import { createUser } from '../../firebase';

function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    if (id === 'name-input') {
      setName(value);
    } else if (id === 'email-input') {
      setEmail(value);
    } else if (id === 'password-input') {
      setPassword(value);
    }
  };
  const signUpUser = async (event, name, email, password) => {
    event.preventDefault();
    try {
      await createUser(name, email, password);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <Container className="mw-100 vh-100 d-flex align-items-center">
      <Container className="w-50 h-75">
        {error && <p>{`${error}`}</p>}
        <Form className="">
          <Form.Group className="mb-3">
            <FloatingLabel
              label="Name"
              className="mb-3"
              id="name"
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
              value={password}
              onChange={(event) => onChangeHandler(event)}
              type="password"
            >
              <Form.Control placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(event) => signUpUser(event, name, email, password)}
          >
            Signup
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default SignUp;
