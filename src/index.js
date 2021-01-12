import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './components/Header/NavMenu';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signUp';
import Banner from './components/Header/Banner';
import PosterCard from './components/Card/PosterCard';
import SaleCard from './components/Card/SaleCard';
import products from './data/Products';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavMenu />
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
              <div className="px-3">
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
        <Row className="d-flex justify-content-center">
          <Button
            style={{ width: '300px' }}
            className="btn p-2 rounded-pill px-4 py-3"
            variant="primary"
            href="#"
          >
            View All List
          </Button>
        </Row>
        <Row className="d-flex justify-content-center py-4 px-4 mx-1 bg-white">
          <h3>Shop By Category</h3>
        </Row>
      </Container>
      <Footer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
