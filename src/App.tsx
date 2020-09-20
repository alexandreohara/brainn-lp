import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Navbar } from './components/Navbar';
import Services from 'pages/Services';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/services'} component={Services} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
