import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../components/Login/LeftSide';
import RightSide from '../components/Login/RgithSide';

const Login = () => {
  return (
    <Container className="bg-info`p-4">
      <Row className="d-flex">
        <Col md={6}>
          <LeftSide />
        </Col>
        <Col md={6}>
          <RightSide />
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
