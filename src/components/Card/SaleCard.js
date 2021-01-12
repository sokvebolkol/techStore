import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SaleCard = ({ imgUrl, strike, price, productName }) => {
  return (
    <div className="px-1 py-4">
      <Card style={{ width: '21rem' }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body className="pt-0">
          <Card.Title>{productName}</Card.Title>
          <div className="d-flex">
            <Card.Text>
              <strike>{strike}</strike>
            </Card.Text>
            <Card.Text className="px-4">{price}</Card.Text>
          </div>
          <Button variant="dark" className="btn btn-block">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SaleCard;
