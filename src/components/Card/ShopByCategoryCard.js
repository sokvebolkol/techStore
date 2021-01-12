import React from 'react';
import { Card } from 'react-bootstrap';

const ShopByCategoryCard = ({ imgUrl, strike, price, productName }) => {
  return (
    <div className="px-1 py-4">
      <Card className="text-center" style={{ width: '21rem' }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body className="pt-0">
          <Card.Title>{productName}</Card.Title>
          <div className="d-flex justify-content-center">
            <Card.Text className="px-4">
              Most popular brands with the best prices
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopByCategoryCard;
