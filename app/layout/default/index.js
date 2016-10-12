import React, { Component, PropTypes } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import './default.scss';

export default class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className="default-layout">
        <Header/>
        <main>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}
