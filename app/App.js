import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
)
