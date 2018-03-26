import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from './App';
import About from './components/about/about';
import Home from './components/home/home';
import NewPatients from './components/new-patients/new-patients';

const Root = (props) => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/newPatients" component={NewPatients} />
          <Route path="*" component={Home} />
        </Switch>
      </App>
    </Router>
  );
};

export default Root;