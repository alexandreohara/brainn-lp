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
import { Routes } from 'consts/routes';

const App = () => {
  return (
    <div data-testid={'app-root'}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path={Routes.home} component={Home} />
          <Route exact path={Routes.services} component={Services} />
          <Route exact path={Routes.storming} component={StormingPage} />
          <Route exact path={Routes.delivery} component={DeliveryPage} />
          <Route exact path={Routes.howWeCanHelp} component={HowWeCanHelp} />
          <Route
            exact
            path={Routes.augmentation}
            component={AugmentationPage}
          />
          <Route exact path={Routes.aboutUs} component={AboutUs} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
