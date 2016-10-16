import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './spinner.scss';

const mapStateToProps = (state) => ({
  loading: state.loading || false
});

class Spinner extends Component {
  static propTypes = {
    loading: PropTypes.bool
  }

  render() {
    if(this.props.loading) {
      return (
        <div className="spinner">
        <div className="icon"/>
        </div>
      );
    }

    return null;
  }
}

export default connect(mapStateToProps)(Spinner);
