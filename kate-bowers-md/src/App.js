import React from 'react';
import './App.css';
import { Header, MainNav }  from './components/common/index';
import PropTypes from 'prop-types';

const App = ({children}) => {
    return (
      <div className="App">
        <Header />
        <MainNav />
        <div className='newClass'>{children}</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

App.propTypes = {
  children: PropTypes.node,
};

export default App;
