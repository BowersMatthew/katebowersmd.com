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
import Parenting from './components/resources/parenting/parenting';
import Development from './components/resources/development/development';
import SickChild from './components/resources/sick-child/sick-child';
import MentalHealth from './components/resources/mental-health/mental-health';
import SiteMap from './components/site-map/site-map';

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
          <Route exact path="/resources/parenting" component={Parenting} />
          <Route exact path="/resources/development" component={Development} />
          <Route exact path='/resources/sickChild' component={SickChild} />
          <Route exact path='/resources/mentalHealth' component={MentalHealth} />
          <Route path="/site-map" component={SiteMap} />
          <Route path="*" component={Home} />
        </Switch>
      </App>
    </Router>
  );
};

export default Root;