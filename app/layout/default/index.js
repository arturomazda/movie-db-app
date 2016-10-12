import React, { Component, PropTypes } from 'react';
import Header from '../../components/header';

import './default.scss';

export default class DefaultLayout extends Component {
  render() {
    return (
      <div className="default-layout">
        <Header/>
        <main>
          View components goes here
        </main>
      </div>
    );
  }
}
