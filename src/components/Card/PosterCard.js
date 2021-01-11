import React from 'react';

import { Jumbotron, Button } from 'react-bootstrap';
const PosterCard = ({ imgUrl, title, subTitle }) => {
  const imgBanner = {
    color: 'white',
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    height: '40vh',
  };

  return (
    <Jumbotron style={imgBanner}>
      <div className="px-4 mx-4 mt-4 pt-4">
        <h5>{title}</h5>
        <br />
        <h2>{subTitle}</h2>
        <div className="w-25 mt-4">
          <Button
            className="btn btn-block p-2 rounded-pill"
            variant="light"
            href="#"
          >
            Shop
          </Button>
        </div>
      </div>
    </Jumbotron>
  );
};
export default PosterCard;
