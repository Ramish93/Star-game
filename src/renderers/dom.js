import React from 'react';
import ReactDOM from 'react-dom';

import {App} from 'components/App.js';

import '../styles/index.css';

ReactDOM.hydrate(<App />, document.getElementById('root'));