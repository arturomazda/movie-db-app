import React, { Component, PropTypes } from 'react';

import './movies-grid.scss';

export default class MoviesGrid extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="movies-grid">
        {this.props.children}
      </div>
    );
  }
}
