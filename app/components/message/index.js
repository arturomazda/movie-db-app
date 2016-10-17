import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import './message.scss';

const mapStateToProps = (state) => ({
  message: state.message
});

class Message extends Component {
  static propTypes = {
    message: PropTypes.object
  }

  render() {
    const messageText = get(this.props, 'message.text');
    console.log(this.props);
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
