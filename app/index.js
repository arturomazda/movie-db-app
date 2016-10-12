import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './reducers/store';
import { routes } from './common/routes';

import './common/styles/global.scss';

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('app'));
