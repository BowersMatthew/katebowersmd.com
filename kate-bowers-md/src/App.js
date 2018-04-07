import React from 'react';
import './App.css';
import { Header, MainNav } from './components/common/index';
import PropTypes from 'prop-types';
import Footer from './components/common/footer';

const App = ({ children }) => {
  return (
    <section className="App">
      <Header /><MainNav />
      <div className='newClass'>{children}</div>
      <Footer />
    </section>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
