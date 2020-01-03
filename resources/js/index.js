import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router } from "react-router-dom";


import Application from './components/Application'

const store = createStore(reducers , composeWithDevTools());

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store = {store}>
            <Router>
                <Application />
            </Router>
        </Provider>
    , document.getElementById('root'));
}
