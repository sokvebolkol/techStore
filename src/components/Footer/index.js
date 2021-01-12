import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import { Link } from 'react-router-i18n';

const FooterItem = ({ children }) => (
  <Link href="/" className="d-flex flex-column text-secondary">
    {children}
  </Link>
);

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="d-none d-sm-block bg-light text-secondary py-4"
      >
        <Container>
          <Row className="pt-4">
            <Col md={4} className="d-flex flex-column align-items-start pt-2">
              <Image
                src="https://seeklogo.com/images/T/technology-round-logo-7AA5D5112F-seeklogo.com.png"
                width={95}
              />
            </Col>

            <Col md={3} className="pt-2">
              <div className="d-flex flex-column h-100 border-right border-secondary">
                <FooterItem>
                  <div>
                    <Image src="/images/instagram-icon.svg" />
                    <span className="ml-2">@techStore</span>
                  </div>
                </FooterItem>
                <FooterItem>
                  <div>
                    <Image src="/images/facebook-icon.svg" />
                    <span className="ml-2">TechStore</span>
                  </div>
                </FooterItem>
              </div>
            </Col>

            <Col md={3} className="pt-2">
              <div className="d-flex flex-column h-100 border-right border-secondary">
                <FooterItem>Products</FooterItem>
                <FooterItem>Services</FooterItem>
                <FooterItem>Blog</FooterItem>
              </div>
            </Col>

            <Col md={2} className="pt-2">
              <div className="d-flex flex-column">
                <FooterItem>My account</FooterItem>
                <FooterItem>Cart</FooterItem>
                <FooterItem>About us</FooterItem>
                <FooterItem>
                  <b>KHMER</b>
                </FooterItem>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex flex-column mt-3 text-center pb-1">
              © 2021 TechStore. All Rights Reserved.
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
