import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import './message.scss';

const mapStateToProps = (state) => ({
  message: state.messages
});

class Message extends Component {
  static propTypes = {
    message: PropTypes.object
  }

  render() {
    const messageText = get(this.props, 'message.text');

    if(messageText) {
      return (
        <div className="message">
          {messageText}
        </div>
      );
    }

    return null;
  }
}

export default connect(mapStateToProps)(Message);
