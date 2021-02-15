import React from 'react';
import { Card } from 'react-bootstrap';
import './ZoomEffectCard.css';

const ShopByCategoryCard = ({ imgUrl, strike, price, productName }) => {
  return (
    <div className="py-4">
      <div className="shadow-lg">
        <Card
          className="text-center zoomImageEffect"
          style={{ width: '20.1rem' }}
        >
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body className="pt-0">
            <Card.Title style={{ position: 'relative', zIndex: '100' }}>
              {productName}
            </Card.Title>
            <div className="d-flex justify-content-center">
              <Card.Text className="px-4">
                Most popular brands with the best prices
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ShopByCategoryCard;
