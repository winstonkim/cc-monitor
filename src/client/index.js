import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
require('./stylesheets/main.scss');

render(<App />, document.getElementById('app'));