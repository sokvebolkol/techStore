import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid className='p-4 mx-4'>
      <Row>
        <Col md={6}>
          <Image className='w-75' src='https://i.pinimg.com/564x/12/36/6c/12366cfa2179f7b9f9ae9178b3946c17.jpg'></Image>
        </Col>
        <Col md={6} className='mt-4'>
          <h2 className='text-primary p-4'>ABOUT US</h2>
          <div className='w-75'>
            <p>
              We are a mobile delivery service that allows people the convenience to book their deliveries using technology. Within a mobile platform, people be able to track the delivery and communicate with the company easily and quickly.
            </p>
          </div>
          <h2 className='text-primary p-4'>OUR VISION & MISSION</h2>
          <div className='w-75'>
            <p>
              To empower small and medium-sized delivery companies who need the innovation platform to attract more customers and combine with the operating management information system to manage their business efficiently and effectively.
              To reduce the cost of delivery and help people the convenience to find the right delivery company.
              To develop delivery and logistic industry via technologies.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
