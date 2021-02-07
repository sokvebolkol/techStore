import React from 'react';
import './backgroundSignInSignUp.css';
import { Col, Container, Row ,Form,Button} from 'react-bootstrap';

const SignUp = () => {
  return (
    <Container>
      <Row className='p-4'>
        <Col md={3}></Col>
        <Col md={6} className='bg-white p-4 mt-4 rounded-lg'>
        <h3 className='text-center'>Register</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter Firstname" />
            </Form.Group>          
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter Lastname" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
          
            <Button className='btn btn-dark btn-block' type="submit">
              Register
            </Button>
            <div className='pt-2'>
              <a className='text-secondary pt-4' href='#'>Already Registered ? </a>
              <a className='text-primary' href='login'> Login</a>
            </div>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default SignUp;
