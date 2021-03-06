import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';
import { Link } from 'react-router-dom';
import { login } from '../../firebase';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    if (id === 'email-input') {
      setEmail(value);
    } else if (id === 'password-input') {
      setPassword(value);
    }
  };

  const loginUser = async (event, email, password) => {
    event.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <Container className="mw-100 vh-100 mt-4">
      <Container className="w-50 h-50 bg-dark d-flex flex-column justify-content-center ">
        {error && <p className="bg-warning text-center mb-4">{`${error}`}</p>}
        <Form className="">
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
            className="btn-block mt-4 mr-4"
            variant="primary"
            type="submit"
            onClick={(event) => loginUser(event, email, password)}
          >
            Login
          </Button>

          <Container className="mt-4 d-flex justify-content-center align-items-end">
            <p className="m-0 mr-4" style={{ color: 'white' }}>
              New User? Create your account
            </p>
            <Link to="/signup" style={{ color: 'white' }}>
              <p className="m-0 ml-4">Signup</p>
            </Link>
          </Container>
        </Form>
      </Container>
    </Container>
  );
}

export default Login;
