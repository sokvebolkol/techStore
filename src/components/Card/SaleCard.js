import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ZoomEffectCard.css';

const SaleCard = ({ imgUrl, strike, price, productName }) => {
  return (
    <div className="py-4">
      <div className="shadow-lg">
        <Card className="px-1 zoomImageEffect" style={{ width: '21.3rem' }}>
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body className="pt-0">
            <Card.Title style={{ position: 'relative', zIndex: '100' }}>
              {productName}
            </Card.Title>
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
    </div>
  );
};

export default SaleCard;
