import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="features" component={Features} />
    <Route path="pricing" component={Pricing} />
    <Route path="about" component={About} />
  </Route>
);