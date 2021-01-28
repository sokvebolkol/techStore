import React from 'react';

import PosterCard from '../components/Card/PosterCard';
import SaleCard from '../components/Card/SaleCard';
import ShopByCategoryCard from '../components/Card/ShopByCategoryCard';
import products from '../data/Products';
import Banner from '../components/Header/Banner';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
const Product = () => {
  return (
    <div>
      <Banner />
      <Container fluid className="px-4 bg-light">
        <Row>
          <Col md={6}>
            <PosterCard
              imgUrl="/images/card.png"
              title="Holiday Deals"
              subTitle="UP to 30% off"
            />
          </Col>
          <Col md={6}>
            <PosterCard
              imgUrl="/images/card2.png"
              title="Just In"
              subTitle="Top Headphone"
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center py-4 px-4 mx-1 bg-white">
          <h3>Best Sellers</h3>
        </Row>
        <Row>
          {products.map((product) => {
            return (
              <div className="px-3" key={product.id}>
                <SaleCard
                  imgUrl={product.imgUrl}
                  strike={product.strike}
                  price={product.price}
                  productName={product.productName}
                />
              </div>
            );
          })}
        </Row>
        <Row className="d-flex justify-content-center my-4 py-4">
          <Button
            style={{ width: '300px' }}
            className="btn p-2 rounded-pill px-4 py-3"
            variant="primary"
            href="#"
          >
            View All List
          </Button>
        </Row>
        <Row className="d-flex justify-content-center py-4 px-4 my-4 mx-1 bg-white">
          <h3>Shop By Category</h3>
        </Row>
        <Row>
          {products.map((product) => {
            return (
              <div className="px-3" key={product.id}>
                <ShopByCategoryCard
                  imgUrl={product.imgUrl}
                  strike={product.strike}
                  price={product.price}
                  productName={product.productName}
                />
              </div>
            );
          })}
        </Row>
        <Row className="px-3 py-4">
          <Image fluid className="w-100" src="images/advertise.png"></Image>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
