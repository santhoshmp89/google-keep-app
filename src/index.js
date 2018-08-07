import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Notes from './components/Notes';

ReactDOM.render(<Notes />, document.getElementById('root'));
registerServiceWorker();
