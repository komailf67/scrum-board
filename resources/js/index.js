import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application'

if (document.getElementById('root')) {
    ReactDOM.render(<Application />, document.getElementById('root'));
}
