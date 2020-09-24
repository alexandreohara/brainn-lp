import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { Navbar } from 'components';
import Home from 'pages/Home';
import Services from 'pages/Services';
import StormingPage from 'pages/StormingPage';
import DeliveryPage from 'pages/DeliveryPage';
import AugmentationPage from 'pages/AugmentationPage';
import HowWeCanHelp from 'pages/HowWeCanHelp';
import AboutUs from 'pages/AboutUs';
import ScrollToTop from 'components/ScrollToTop';

const App = () => {
  return (
    <div data-testid={'app-root'}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/services'} component={Services} />
          <Route exact path={'/services/storming'} component={StormingPage} />
          <Route exact path={'/services/delivery'} component={DeliveryPage} />
          <Route exact path={'/how-we-can-help'} component={HowWeCanHelp} />
          <Route
            exact
            path={'/services/augmentation'}
            component={AugmentationPage}
          />
          <Route exact path={'/about-us'} component={AboutUs} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
