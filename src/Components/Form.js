import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
    <h1 className="login">Welcome Teyvat Traveler</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 check" controlId="formBasicCheckbox" >
          <Form.Check type="checkbox" label="Check our world rules" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn1">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
