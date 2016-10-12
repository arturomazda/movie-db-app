import React, { Component, PropTypes } from 'react';

import './spinner.scss';

export default class Spinner extends Component {
  static propTypes = {
    message: PropTypes.string,
  }

  render() {
    return (
      <div className="spinner">
        <div className="icon"/>
        {this._renderMessage()}
      </div>
    );
  }

  _renderMessage() {
    if(this.props.message) {
      return (
        <p className="message">{this.props.message}</p>
      );
    }

    return null;
  }
}
