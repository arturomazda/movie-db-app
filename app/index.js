import React from 'react';
import { render } from 'react-dom';
import DefaultLayout from './layout/default';

import './common/styles/global.scss';

render(
  <DefaultLayout />,
  document.getElementById('app')
);
