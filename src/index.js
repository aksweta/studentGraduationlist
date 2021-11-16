import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './configureStore';
import {Provider} from 'react-redux';
import Table from './components/Table';
import Graduationlist from './components/Graduationlist.jsx';


ReactDOM.render(
    <Provider store={store}>
    <App />
    <Table/>
    <Graduationlist/>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
