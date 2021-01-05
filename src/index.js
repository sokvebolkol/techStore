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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavMenu />
      <Banner></Banner>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
