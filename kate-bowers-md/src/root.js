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
import Resources from './components/resources/resources';
import Vaccines from './components/resources/vaccines/vaccines';

const Root = (props) => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/newPatients" component={NewPatients} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/resources/vaccines" component={Vaccines} />
          <Route path="*" component={Home} />
        </Switch>
      </App>
    </Router>
  );
};

export default Root;