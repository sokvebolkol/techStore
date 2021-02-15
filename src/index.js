import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './components/Header/NavMenu';
import Home from './pages';
import Product from './pages/products';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Login from './pages/login';
import SignUp from './pages/signUp';

import Footer from './components/Footer';

const url = window.location.pathname;
const navigationMenu = url === '/signUp' || url === '/login' ? '' : <NavMenu />;
const footer = url === '/signUp' || url === '/login' ? '' : <Footer />;

ReactDOM.render(
  <React.StrictMode>
    {navigationMenu}
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Product} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/logIn" component={Login} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
      {footer}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
