import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import "./style/app.scss";
import {BrowserRouter as Router} from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router basename={process.env.REACT_APP_SITE_URL}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

