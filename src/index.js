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

import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavMenu />
      <Banner />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
