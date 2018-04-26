import React from 'react';
import './App.css';
import { Header, MainNav } from './components/common/index';
import PropTypes from 'prop-types';
import Footer from './components/common/footer';
import BreadCrumb from './components/common/nav/bread-crumb';

const App = ({ children }) => {
  return (
    <section className="App">
      <Header /><MainNav />
      <BreadCrumb />
      <div className='newClass'>{children}</div>
      <Footer />
    </section>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
