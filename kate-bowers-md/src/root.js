import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from './App';
import About from './components/about/about';
import Home from './components/home/home';
import NewPatients from './components/new-patients/new-patients';
import Insurance from './components/insurance/insurance';
import Resources from './components/resources/resources';
import Vaccines from './components/resources/vaccines/vaccines';
import Parenting from './components/resources/parenting/parenting';
import Development from './components/resources/development/development';
import SickChild from './components/resources/sick-child/sick-child';
import MedicationDosing from './components/resources/sick-child/medication-dosing';
import MentalHealth from './components/resources/mental-health/mental-health';
import SiteMap from './components/site-map/site-map';
import Contact from './components/contact/contact';
import Privacy from './components/contact/privacy';
import Portal from './components/portal';
import { VaccineAutism } from './components/resources/parenting/vaccines-autism';
import PatientForms from './components/resources/patient-forms/patient-forms';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-118938675-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const history = createHistory();
history.listen((location, action) => {
  ReactGA.set({page: location.pathname});
  ReactGA.pageview(location.pathname);
})

class Root extends Component {

componentWillMount() {
  ReactGA.set({page: history.location.pathname});
  ReactGA.pageview(history.location.pathname);
}

  render() {
    return (
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/newPatients' component={NewPatients} />
            <Route path='/Insurance' component={Insurance} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/resources/vaccines' component={Vaccines} />
            <Route exact path='/resources/parenting' component={Parenting} />
            <Route exact path='/resources/parenting/vaccines-autism' component={VaccineAutism} />
            <Route exact path='/resources/development' component={Development} />
            <Route exact path='/resources/sickChild' component={SickChild} />
            <Route exact path='/resources/sickChild/medicationDosing' component={MedicationDosing} />
            <Route exact path='/resources/mentalHealth' component={MentalHealth} />
            <Route exact path='/resources/patient-forms' component={PatientForms} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/contact/privacy' component={Privacy} />
            <Route path='/site-map' component={SiteMap} />
            <Route path='/portal' component={Portal} />
          </Switch>
        </App>
      </Router>
    );
  }
};

export default Root;