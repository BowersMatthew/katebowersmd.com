import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Root from './root';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
unregister();
