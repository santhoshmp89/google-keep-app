import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AllNotes from './components/AllNotes';

ReactDOM.render(<AllNotes />, document.getElementById('root'));
registerServiceWorker();
