import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={'/'} component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
