import React, { Component, PropTypes } from 'react';

import './message.scss';

export default class Message extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    return (
      <div className="message">
        {this.props.text}
      </div>
    );
  }
}
