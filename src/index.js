import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import authService from './service/auth_service';
const auth = new authService();
ReactDOM.render(
  <React.StrictMode>
    <App authService={auth}/>
  </React.StrictMode>,
  document.getElementById('root')
);
