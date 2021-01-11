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
import { Col, Container, Row } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavMenu />
      <Banner />
      <Container fluid className="px-4">
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
      </Container>
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
