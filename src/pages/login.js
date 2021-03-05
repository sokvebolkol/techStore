import React, { useEffect } from "react";
import "./backgroundSignInSignUp.css";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const Login = () => {
  useEffect(() => {
    document.body.classList.add("bodyBackground"); // component didmount
    return () => {
      document.body.classList.remove("bodyBackground"); // component unmound
    };
  }, []);
  return (
    <Container className="p-4">
      <Row>
        <Col md={3}></Col>
        <Col md={6} className="bg-white p-4 mt-4 rounded-lg">
          <h3 className="text-center">Login</h3>
          <Form className="p-4">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>

            <Button className="btn btn-dark btn-block" type="submit">
              Login
            </Button>
            <div className="pt-2">
              <a className="text-secondary pt-4" href="#">
                Your forgot Password?{" "}
              </a>
              <a className="text-primary" href="signUp">
                {" "}
                Register
              </a>
            </div>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default Login;
