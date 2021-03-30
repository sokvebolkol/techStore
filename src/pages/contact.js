import React from "react";

import { Container } from "react-bootstrap";
import Map from "../components/Map";

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
      <div className="text-center px-4 py-4 my-4">
        <h2>JOIN US</h2>
        <p>
          We are looking for a good partnership to provide the best delivery
          services to our customers on the operation side. As cooperation, we
          fully connect your company to our mobile app platform in order to
          increase your sales revenue. Additionally, we strongly believe that
          our technology could help to empower your business as well.
        </p>
      </div>
      {/* use simple bootstrap not react bootstrap  */}
      <div className="mx-4 px-4">
        <form action="/join_us" method="post">
          <div class="row form-group">
            <div class="col-md-6">
              <label>Company Name *</label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                class="form-control"
                placeholder=""
              />
            </div>
            <div class="col-md-6">
              <label>Facebook URL *</label>
              <input
                type="text"
                id="company_facebook"
                name="company_facebook"
                class="form-control"
                placeholder=""
              />
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-6">
              <label>Contact Name *</label>
              <input
                type="text"
                id="contact_name"
                name="contact_name"
                class="form-control"
                placeholder=""
              />
            </div>
            <div class="col-md-6">
              <label>Contact Number *</label>
              <input
                type="text"
                id="contact_number"
                name="contact_number"
                class="form-control"
                placeholder=""
              />
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-12">
              <label>Message *</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                class="form-control"
                placeholder="Describe your idea..."
              ></textarea>
            </div>
          </div>
          <div class="form-group">
            <input type="submit" value="Send Message" class="btn btn-primary" />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
