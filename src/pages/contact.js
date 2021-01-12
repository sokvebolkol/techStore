import React from 'react';

import { Container } from 'react-bootstrap';
import Map from '../components/Map';

const Contact = () => {
  return (
    <Container className="py-4 my-4">
      <Map />
      <div className="text-center px-4 py-4 my-4">
        <h2>Contact Us </h2>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
      </div>
    </Container>
  );
};

export default Contact;
