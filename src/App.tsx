import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Navbar } from './components/Navbar';
import Services from 'pages/Services';
import StormingPage from 'pages/StormingPage';
import DeliveryPage from 'pages/DeliveryPage';
import AugmentationPage from 'pages/AugmentationPage';
import HowWeCanHelp from 'pages/HowWeCanHelp';
import AboutUs from 'pages/AboutUs';

const App = () => {
  return (
    <React.Fragment>
      <Router>
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
    </React.Fragment>
  );
};

export default App;
