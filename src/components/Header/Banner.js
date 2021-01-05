import React from 'react';

import { Jumbotron, Button } from 'react-bootstrap';

const Banner = () => {
  const imgUrl = '/images/banner.png';
  const imgBanner = {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    height: '80vh',
  };
  return (
    <Jumbotron style={imgBanner} className="w-100">
      <div className="px-4 mx-4 w-50 mt-4 pt-4">
        <h1>
          Incredible Prices on All Your Favorite Items, Enjoy for your Shopping
          everyday!
        </h1>
        <br />
        <p>I'm a title. Click here to edit me.</p>
        <div className="w-25">
          <Button
            className="btn btn-block p-2 rounded-pill"
            variant="primary"
            href="#"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Banner;
